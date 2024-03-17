// To save as "ebookshop\WEB-INF\classes\QueryServlet.java".
import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//import javax.servlet.*;            // Tomcat 9
//import javax.servlet.http.*;
//import javax.servlet.annotation.*;

@WebServlet("/PaymentPageServlet")   // Configure the request URL for this servlet (Tomcat 7/Servlet 3.0 upwards)
public class PaymentPageServlet extends HttpServlet {

   // The doGet() runs once per HTTP GET request to this servlet.
   @Override
   public void doPost(HttpServletRequest request, HttpServletResponse response)
               throws ServletException, IOException {
        // Set the MIME type for the response message
        response.setContentType("text/html");
        // Get a output writer to write the response message into the network socket
        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Payment</title></head>");
        out.println("<body>");
        
        out.println("<link rel='stylesheet' href='eshopstyle_template.css?v=2'>");
        out.println("<div class = 'header'><h1> Checkout Page </h1></div>");
        
        out.println("<div class = 'navbar'>");
        out.println("<a href = 'Eshop.html'>Store</a>");
        out.println("<form style='border: none; margin: 0; padding: 0;' method='POST' action='valcheckout'>");
        out.println("<input type='submit' value='Checkout'></form>");
        out.println("<form style='border: none; margin: 0; padding: 0;' method='POST' action='valinventory'>");
        out.println("<input type='submit' value='Inventory'></form>");
        out.println("<a href = 'https://playvalorant.com/en-sg/'>Play</a>");
        out.println("<a href = 'login.html' class = 'right'>Login</a></div>");
        out.println("<div class = 'row'><div class = 'side'></div>");
        out.println("<div class = 'main'>");

        out.println("<h2>PAYMENT</h2>");
        // Print an HTML page as the output of the query
        String username = request.getParameter("username");
        String finalCost = request.getParameter("finalCost"); 

        out.println("<h3>User: " + username);
        out.println("<br>Payment Amount: $" + finalCost + "</h3>");

        out.println("<br><form action='PaymentServlet'>");
        out.println("<input type='hidden' name='username' value='" + username + "' />");
        out.println("<input type='hidden' name='finalCost' value='" + finalCost + "' />");
        out.println("<div><label class = 'form-label'>Name on Card</label><br><input type = 'text' class='form-control' name = 'name'></div><br>");
        out.println("<div><label class = 'form-label'>Card Number</label><br><input type = 'text' pattern='[0-9]{16}' class='form-control' name = 'cardNumber'></div><br>");
        out.println("<div><label class = 'form-label'>Expiry Date (MM/YYYY)</label><br><input type = 'text' pattern='[0-1]{1}[0-9]{1}/[0-9]{4}' class='form-control' name = 'expiry'></div><br>");
        out.println("<div><label class = 'form-label'>CVV</label><br><input type = 'text' pattern='[0-9]{3}'class='form-control' name = 'cvv'></div><br>");
        out.println("<div><label class = 'form-label'>Postal Code</label><br><input type = 'text' pattern='[0-9]{6}'class='form-control' name = 'postalcode'></div><br>");
        out.println("<button type = 'submit' class = 'btn btn-primary'>Submit</button>");
        out.println("<br></form>");
        out.println("</div></div>");
        out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");

        out.println("</body></html>");
        out.close();
    }
}

