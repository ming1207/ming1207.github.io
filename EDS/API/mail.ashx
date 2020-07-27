<%@ WebHandler Language="C#" Class="mail" %>

using System;
using System.Web;
using System.Net.Mail;
using System.Text;

public class mail : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/html";

        try {
            StringBuilder str = new StringBuilder();
            str.Append("产品型号：" + context.Request["XH"]);
            str.Append("<br>姓名：" + context.Request["XM"]);
            str.Append("<br>电话：" + context.Request["DH"]);
            str.Append("<br>邮箱：" + context.Request["YX"]);
            str.Append("<br>城市：" + context.Request["CS"]);
            str.Append("<br>申请说明：" + context.Request["SM"]);

            if (SendMail("Joyce.Xu@moxa.com", "产品询价", str.ToString()))
            {
                context.Response.Write("<script>window.parent.stlInputCallback('{\"isSuccess\": \"true\",\"message\": \"提交成功！\"}');</script>");
            }
            else {
                context.Response.Write("<script>window.parent.stlInputCallback('{\"isSuccess\": \"true\",\"message\": \"提交失败！\"}');</script>");
            }
        }
        catch {
            context.Response.Write("<script>window.parent.stlInputCallback('{\"isSuccess\": \"true\",\"message\": \"提交失败！\"}');</script>");
        }
    }

    /// <summary>
    /// 邮件发送方法
    /// </summary>
    /// <param name="email">收件人邮箱</param>
    /// <param name="title">邮件标题</param>
    /// <param name="content">邮件内容</param>
    /// <returns></returns>
    private bool SendMail(string email, string title, string content)
    {
        try
        {
            MailMessage msg = new MailMessage();
            msg.To.Add(email);
            msg.From = new MailAddress("secretariat@edm.levelupshanghai2017.com", "MOXA", System.Text.Encoding.UTF8);
            msg.Subject = title; //邮件标题    
            msg.SubjectEncoding = System.Text.Encoding.UTF8;//邮件标题编码    
            msg.Body = content;//邮件内容    
            msg.BodyEncoding = System.Text.Encoding.UTF8;//邮件内容编码    
            msg.IsBodyHtml = true;//是否是HTML邮件    
            msg.Priority = MailPriority.High;//邮件优先级    

            SmtpClient client = new SmtpClient();
            client.Credentials = new System.Net.NetworkCredential("edmc24561045", "3TGD6SUV");
            client.Host = "smtp.trigger.edmcn.cn";
            client.Port = 25;
            object userState = msg;
            client.Send(msg);
            return true;
        }
        catch
        {
            return false;
        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}