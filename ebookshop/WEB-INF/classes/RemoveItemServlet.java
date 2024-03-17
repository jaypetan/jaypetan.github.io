// To save as "ebookshop\WEB-INF\classes\QueryServlet.java".
import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//import javax.servlet.*;            // Tomcat 9
//import javax.servlet.http.*;
//import javax.servlet.annotation.*;

@WebServlet("/RemoveItemServlet")   // Configure the request URL for this servlet (Tomcat 7/Servlet 3.0 upwards)
public class RemoveItemServlet extends HttpServlet {

   // The doGet() runs once per HTTP GET request to this servlet.
   @Override
   public void doPost(HttpServletRequest request, HttpServletResponse response)
               throws ServletException, IOException {
        // Set the MIME type for the response message
        response.setContentType("text/html");
        // Get a output writer to write the response message into the network socket
        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<head><title>Checkout</title><style>");
        out.println("table, td, th { border: 1px solid; padding: 10px; text-align: center;}");
        out.println("table {width: 100%; border-collapse: collapse;}");
        out.println("</style></head>");
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

        out.println("<h2>ORDER LIST</h2>");
        // Print an HTML page as the output of the query
        String gunType = request.getParameter("gunType");
        String skinType = request.getParameter("skinType");
        String username = request.getParameter("username");
        int finalCost = 0;

        out.println("<h3>User: " + username);
        out.println("<table border='1'>");
        out.println("<tr><th>No.</th><th> Gun Type </th><th> Skin Type </th><th> Cost </th><th> Remove </th></tr>");

        try (
            //Allocate a database 'Connection' object
            Connection conn = DriverManager.getConnection(
               "jdbc:mysql://localhost:3306/valomkt?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
               "myuser", "xxxx");   // For MySQL
               // The format is: "jdbc:mysql://hostname:port/databaseName", "username", "password"

        ){
            PreparedStatement delStmt = conn.prepareStatement("DELETE FROM cart_items WHERE gunType = ? AND skinType = ? AND customerName = ?");
            delStmt.setString(1, gunType);
            delStmt.setString(2, skinType);
            delStmt.setString(3, username);
            delStmt.executeUpdate();

            int count = 1;

            String checkout = "SELECT c.customerName, c.gunType, c.skinType, g.totalCost FROM cart_items c INNER JOIN gun_skin_combination g ON c.gunType = g.gunType AND c.skinType= g.skinType WHERE customerName = ?";
            try (PreparedStatement stmt = conn.prepareStatement(checkout)) {
            // Execute the query and process the ResultSet
                stmt.setString(1, username);
                try (ResultSet rs = stmt.executeQuery()) {
                    while (rs.next()) {
                        out.println("<tr><td>" + count + "</td>");
                        out.println("<td>" + rs.getString("gunType") + "</td>");
                        out.println("<td>" + rs.getString("skinType") + "</td>");
                        out.println("<td>" + rs.getInt("totalCost") + "</td>");
                        count++;

                        out.println("<td><form method='POST' action='RemoveItemServlet'>");
                        out.println("<input type='hidden' name='username' value='" + username + "' />");
                        out.println("<input type='hidden' name='gunType' value='" + rs.getString("gunType") + "' />");
                        out.println("<input type='hidden' name='skinType' value='" + rs.getString("skinType") + "' />");
                        out.println("<input type='submit' value='X' />");
                        out.println("</form></td></tr>");

                        finalCost += rs.getInt("totalCost");
                    }
                }
            }

            out.println("</table>");

            out.println("<br><h2> Total Cost = $" + finalCost + "</h2>");
            out.println("<form method='POST' action='PaymentPageServlet'>");
            out.println("<input type='hidden' name='username' value='" + username + "' />");
            out.println("<input type='hidden' name='finalCost' value='" + finalCost + "' />");
            out.println("<input type='submit' value='GO TO PAYMENT' />");
            out.println("</form>");

            out.println("</div></div>");
            out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");

        } catch (SQLException e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "An error occurred while deleting the item.");
            return;
        }

        response.setStatus(HttpServletResponse.SC_OK);
        out.println("</body></html>");
        out.close();
    }
}
