export default (payload) => {
  return `
    <html>
      <center>
          <style>
          .signature, .title { 
          float:left;
            border-top: 1px solid #000;
            width: 200px; 
            text-align: center;
          }
          </style>
          <div style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #787878">
          <div style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #787878">
                 <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
                 <br><br>
                 <br><br>
                 <span style="font-size:25px"><i>This is to certify that</i></span>
                 <br><br>
                 <span style="font-size:30px"><b>${payload.fullName}</b></span><br/><br/>
                 <span style="font-size:20px"><b>${payload.businessName}</b></span><br/><br/>
                 <br><br>
                 <span style="font-size:25px"><i>has completed the course</i></span> <br/><br/>
                 <span style="font-size:30px">Offline Training Information System</span> <br/><br/>
                 <span style="font-size:20px">PT Sasana Solusi Digital</span> <br/><br/>
          <table style="margin-top:40px;float:left">
          <tr>
          <td style="text-align:center"><span><b>Signature</b></td>
          </tr>
          <tr>
          <td style="width:200px;float:left;border:0;border-bottom:1px solid #000;"></td>
          </tr>
          <tr>
          <td style="text-align:center"><span><b>Director</b></td>
          </tr>
          </table>
          <table style="margin-top:40px;float:right">
          <tr>
          <td style="text-align:center"><span><b>Signature</b></td>
          </tr>
          <tr>
          <td style="width:200px;float:right;border:0;border-bottom:1px solid #000;"></td>
          </tr>
          <tr>
          <td style="text-align:center"><span><b>Chairman</b></td>
          </tr>
          </table>
          </div>
          </div>
          <span style="font-size:10px; padding: 5px"><i>Created at ${payload.createdAt} </i></span><br>
          </center>        
  </html>`;
};
