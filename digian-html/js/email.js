function sendFormData(e) {
  var sheet = e.source.getActiveSheet();
  var range = e.range;
  var formData = e.namedValues;
  
  // Set up the Gmail account
  var recipient = "oc3.alison@gmail.com";
  var subject = "Form Submission";
  
  // Create the email body
  var body = "";
  for (var key in formData) {
    body += key + ": " + formData[key] + "\n";
  }
  
  // Send the email
  var mailOptions = {
    to: recipient,
    subject: subject,
    body: body
  };
  MailApp.sendEmail(mailOptions);
}