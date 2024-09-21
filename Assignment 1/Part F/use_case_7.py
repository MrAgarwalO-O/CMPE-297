import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

def send_email(subject, body, to, attachment):
    from_addr = 'your_email@example.com'
    password = 'your_password'
    msg = MIMEMultipart()
    msg['From'] = from_addr
    msg['To'] = to
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    with open(attachment, 'rb') as file:
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(file.read())
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', f'attachment; filename={attachment}')
        msg.attach(part)

    server = smtplib.SMTP('smtp.example.com', 587)
    server.starttls()
    server.login(from_addr, password)
    server.sendmail(from_addr, to, msg.as_string())
    server.quit()

if __name__ == '__main__':
    send_email('Test Subject', 'This is a test email.', 'recipient@example.com', 'file.txt')