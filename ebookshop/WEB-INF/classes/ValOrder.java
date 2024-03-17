// To save as "ebookshop\WEB-INF\classes\QueryServlet.java".
import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//import javax.servlet.*;            // Tomcat 9
//import javax.servlet.http.*;
//import javax.servlet.annotation.*;

@WebServlet("/valorder")   // Configure the request URL for this servlet (Tomcat 7/Servlet 3.0 upwards)
public class ValOrder extends HttpServlet {

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
      out.println("<head><title>Valorant Market</title></head>");
      out.println("<body>");

      out.println("<link rel='stylesheet' href='eshopstyle_template.css?v=2'>");
      out.println("<div class = 'header'><h1> Login Page </h1></div>");
      
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
         //Get current user from data
         String getUsername = "Select current_userid FROM currentuser";
         String username = "";

         try (PreparedStatement nameStmt = conn.prepareStatement(getUsername)) {
            // Execute the query and process the ResultSet
            try (ResultSet rs = nameStmt.executeQuery()) {
               if (rs.next()) {
                  username = rs.getString("current_userid");
               }
            }
         }

         //Execute a SQL SELECT query
         String gunType = request.getParameter("gunType");
         String skinType = request.getParameter("skinType");

         //Ensure all unputs are provided
         if (username == null || username.isEmpty() ) {
            out.println("<h2>Please Log In.</h2>");
            out.println("</body></html>");
            return; 
         } 

         if (gunType == null || gunType.isEmpty() || skinType == null || skinType.isEmpty()) {
            out.println("<h2>Missing parameters. Please select all required options.</h2>");
            out.println("<h3>===You have input=== <br> Username: " + username + "<br> Gun Type: " + gunType + "<br> Skin: " + skinType + "</h3>");
            out.println("</body></html>");
            out.print("<a href = 'Eshop.html'>GO BACK TO STORE</a>");
            return; 
         } 

         //Check if the data exist
         boolean dataExists = false;
         String checkQuery = "SELECT * FROM user_items WHERE customerName = ? AND gunType = ? AND skinType = ?";
         
         try (PreparedStatement checkStmt = conn.prepareStatement(checkQuery)) {
            checkStmt.setString(1, username);
            checkStmt.setString(2, gunType);
            checkStmt.setString(3, skinType);

            ResultSet rset = checkStmt.executeQuery();

            //Process the query result set
            if(rset.next()) {
              dataExists = true;
              out.println("<h2>Hello " + rset.getString("customerName") + " !</h2>");
              out.println("<h3>You have already purchased " + rset.getString("gunType")
                  + ", " + rset.getString("skinType") + " !</h3>");
              out.print("<a href = 'Eshop.html'>GO BACK TO STORE</a>");
            }
         }
               // check if its on in checkout page
         String checkQueryAgain = "SELECT * FROM cart_items WHERE customerName = ? AND gunType = ? AND skinType = ?";
         
         try (PreparedStatement checkStmtAgain = conn.prepareStatement(checkQueryAgain)) {
            checkStmtAgain.setString(1, username);
            checkStmtAgain.setString(2, gunType);
            checkStmtAgain.setString(3, skinType);

            ResultSet rset2 = checkStmtAgain.executeQuery();

            if(rset2.next()) {
               dataExists = true;
               out.println("<h2>Hello " + rset2.getString("customerName") + " !</h2>");
               out.println("<h3> The item " + rset2.getString("gunType")
                     + ", " + rset2.getString("skinType") + " is already in your cart!</h3>");
               out.print("<a href = 'Eshop.html'>GO BACK TO STORE</a>");
            }  
         }
         //For new orders
         if(!dataExists){
            //To add orders into the cart
            String insertQuery = "INSERT INTO cart_items (customerName, gunType, skinType) VALUES (?, ?, ?)";

            try (PreparedStatement insertStmt = conn.prepareStatement(insertQuery)) {
               insertStmt.setString(1, username);
               insertStmt.setString(2, gunType);
               insertStmt.setString(3, skinType);

               int rowsAffected = insertStmt.executeUpdate();
               if (rowsAffected > 0) {
                  out.println("<h2> Thank you for your purchase, "+ username +" ! </h2>");
                  out.println("<h3> New items have been added to your cart.</h3>");
                  out.print("<a href = 'Eshop.html'>GO BACK TO STORE</a>");
               } else {
                  //if error occurs
                  out.println("<p> Something went wrong </p>");
               }
            }
         }

      } catch(Exception ex) {
         out.println("<p>Error: " + ex.getMessage() + "</p>");
         out.println("<p>Check Tomcat console for details.</p>");
         ex.printStackTrace();
      }  // Step 5: Close conn and stmt - Done automatically by try-with-resources (JDK 7)
 
      out.println("</div></div>");
      out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");
      out.println("</body></html>");
      out.close();
   }
}

      
