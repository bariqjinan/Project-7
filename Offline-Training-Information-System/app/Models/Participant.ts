import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Participant extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fullName: string;

  @column()
  public businessName: string;

  @column()
  public email: string;

  @column()
  public phone: string;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;
}
