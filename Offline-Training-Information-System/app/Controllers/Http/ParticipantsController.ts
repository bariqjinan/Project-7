import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Participant from "App/Models/Participant";
import ParticipantValidator from "App/Validators/ParticipantValidator";
import { schema, rules } from "@ioc:Adonis/Core/Validator";
import PrintCertificate from "App/Docs/PrintCertificate";
import PrintNameTag from "App/Docs/PrintNameTag";

export default class ParticipantsController {
  public async index({ response }: HttpContextContract) {
    const data = await Participant.all();

    return response.ok({ message: "success get data", data });
  }

  public async store({ response, request }: HttpContextContract) {
    let payload = await request.validate(ParticipantValidator);
    let newParticipants = await Participant.create({
      fullName: payload.full_name,
      businessName: payload.business_name,
      email: payload.email,
      phone: payload.phone,
    });

    return response.created({
      message: `success input data with id: ${newParticipants.id}`,
    });
  }

  public async show({ params, response }: HttpContextContract) {
    const data = await Participant.findOrFail(params.id);

    return response.ok({
      message: `success get data with id : ${data.id}`,
      data,
    });
  }

  public async nameTag({ params, response }: HttpContextContract) {
    let participant = await Participant.findByOrFail("id", params.id);

    response.send(PrintNameTag(participant));
  }

  public async certificate({ params, response }: HttpContextContract) {
    let participant = await Participant.findByOrFail("id", params.id);

    response.send(PrintCertificate(participant));
  }

  public async update({ params, request, response }: HttpContextContract) {
    const partiSchema = schema.create({
      full_name: schema.string({}, [rules.minLength(4)]),
      business_name: schema.string({}, [rules.minLength(4)]),
      email: schema.string({}, [rules.email()]),
      phone: schema.string({}, [rules.mobile({ strict: true })]),
    });

    const payload = await request.validate({ schema: partiSchema });
    const Parti = await Participant.findOrFail(params.id);
    await Parti.merge({
      fullName: payload.full_name,
      businessName: payload.business_name,
      email: payload.email,
      phone: payload.phone,
    }).save();

    return response.ok({ message: `updated data with id : ${Parti.id}` });
  }

  public async destroy({ params, response }: HttpContextContract) {
    let data = await Participant.findOrFail(params.id);

    await data.delete();

    return response.ok({
      message: `success delete data with id: ${params.id}`,
    });
  }
}
