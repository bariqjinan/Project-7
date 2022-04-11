export default (payload) => {
  return `<html>
      <style>
      .signature, .title { 
      float:left;
        border-top: 1px solid #000;
        width: 200px; 
        text-align: center;
      }
      </style>
      <center>
      <div style="width:250px; height:400px; padding:20px; text-align:center; border: 10px solid #787878">
      <div style="width:200px; height:350px; padding:20px; text-align:center; border: 5px solid #787878">
             <span style="font-size:25px; font-weight:bold">Name Tag</span>
             <br><br>
             <br><br>
             <span style="font-size:8px">Nama Peserta</span><br/>
             <span style="font-size:14px"><b>${payload.fullName}</b></span><br/><br/>
             <span style="font-size:8px">Institusi</span><br/>
             <span style="font-size:14px"><b>${payload.businessName}</b></span><br/><br/>
             <span style="font-size:8px">Email Peserta</span><br/>
             <span style="font-size:14px"><b>${payload.email}</b></span><br/><br/>
             <span style="font-size:8px">Nomor HP Peserta</span><br/>
             <span style="font-size:14px"><b>${payload.phone}</b></span><br/><br/>
             <br><br>
             <span style="font-size:10px">Offline Training Information System</span> <br/><br/>
             <span style="font-size:10px">PT Sasana Solusi Digital</span> <br/><br/>
      </center>   
  </html>`;
};
