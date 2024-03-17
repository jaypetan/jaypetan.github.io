// To save as "ebookshop\WEB-INF\classes\QueryServlet.java".
import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//import javax.servlet.*;            // Tomcat 9
//import javax.servlet.http.*;
//import javax.servlet.annotation.*;

@WebServlet("/valinventory")   // Configure the request URL for this servlet (Tomcat 7/Servlet 3.0 upwards)
public class ValInventory extends HttpServlet {

   // The doGet() runs once per HTTP GET request to this servlet.
   @Override
   public void doPost(HttpServletRequest request, HttpServletResponse response)
               throws ServletException, IOException {
        // Set the MIME type for the response message
        response.setContentType("text/html");
        // Get a output writer to write the response message into the network socket
        PrintWriter out = response.getWriter();
         // Print an HTML page as the output of the query
        out.println("<html>");
        out.println("<head><title>Inventory</title><style>");
        out.println("table, td, th { border: 1px solid; padding: 10px; text-align: center;}");
        out.println("table {max-width: 700px; width: 100%; border-collapse: collapse;}");
        out.println("</style></head>");
        out.println("<body>");

        out.println("<link rel='stylesheet' href='eshopstyle_template.css?v=2'>");
        out.println("<div class = 'header'><h1> Inventory Page </h1></div>");
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

        try (
         //Allocate a database 'Connection' object
         Connection conn = DriverManager.getConnection(
               "jdbc:mysql://localhost:3306/valomkt?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
               "myuser", "xxxx");   // For MySQL
               // The format is: "jdbc:mysql://hostname:port/databaseName", "username", "password"

        ) {
            
            out.println("<h2>INVENTORY LIST</h2>");
            out.println("<table border='1'>");
            out.println("<tr><th>No.</th><th> Gun Type </th><th> Skin Type </th></tr>");

            String getUsername = "Select current_userid FROM currentuser";
            String username = "";
            int finalCost = 0;

            try (PreparedStatement nameStmt = conn.prepareStatement(getUsername)) {
            // Execute the query and process the ResultSet
                try (ResultSet rs = nameStmt.executeQuery()) {
                    if (rs.next()) {
                        username = rs.getString("current_userid");
                    }
                }
            }

            out.println("<h3>User: " + username);
            String checkout = "SELECT * FROM user_items WHERE customerName = ?";
            int count = 1;
            try (PreparedStatement stmt = conn.prepareStatement(checkout)) {
            // Execute the query and process the ResultSet
                stmt.setString(1, username);
                try (ResultSet rs = stmt.executeQuery()) {
                    while (rs.next()) {
                        out.println("<tr><td>" + count + "</td>");
                        out.println("<td>" + rs.getString("gunType") + "</td>");
                        out.println("<td>" + rs.getString("skinType") + "</td></tr>");
                        count++;
                    }
                }
            }

            out.println("</table>");
            out.println("</div></div>");
            out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");

        } catch(Exception ex) {
         out.println("<p>Error: " + ex.getMessage() + "</p>");
         out.println("<p>Check Tomcat console for details.</p>");
         ex.printStackTrace();
        }  // Step 5: Close conn and stmt - Done automatically by try-with-resources (JDK 7)
 
        out.println("</body></html>");
        out.close();
    }
}
