import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet("/PaymentServlet")   
public class PaymentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public PaymentServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// create table register_card(amount float,name varchar(20), cardNumber int, 
		//expiry text, postalcode int);

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		//recieve form parameter value
		String username = request.getParameter("username");
		String amount = request.getParameter("finalCost");
		String name = request.getParameter("name");
		String cardNumber = request.getParameter("cardNumber");
		String expiry = request.getParameter("expiry");
		String cvv= request.getParameter("cvv");
		String postalcode= request.getParameter("postalcode");


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

		//DB Connection
		try{
			//Load Driver
			Class.forName("com.mysql.cj.jdbc.Driver");
			//Connection Created
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/valomkt","myuser","xxxx");
			//prepare query
			String query = "insert into register_card values('"+username+"', '"+amount+"', '"+name+"', '"+cardNumber+"', '"+expiry+"', '"+cvv+"','"+postalcode+"')";
			//run query
			Statement st = conn.createStatement();
			int status = st.executeUpdate(query);

			//popup window code
	        String successWindow = "<script type=\"text/javascript\">\n" +
                                "    alert(\"Payment Successful! Click OK to return to Shop\");\n" +
                                "    window.location = \"Eshop.html\";\n" +               //CHANGE HTML HERE!!
                                "</script>";
	        String failWindow = "<script type=\"text/javascript\">\n" +
                                "    alert(\"Payment Failed! Click OK to return to Shop\");\n" +
                                "    window.location = \"Eshop.html\";\n" +   			  //CHANGE HTML HERE!
                                "</script>";

			if(status != 0) {
				out.print("<h2>Payment Successful!</h2>");
				//popup window
		        out.println(successWindow);
				

				//Add cart items to user items
				String getQuery = "SELECT * FROM cart_items WHERE customerName = ?";
				String insertQuery = "INSERT INTO user_items (customerName, gunType, skinType) VALUES (?, ?, ?)";
         		try (PreparedStatement getStmt = conn.prepareStatement(getQuery)) {
            		getStmt.setString(1, username);
            		ResultSet rset = getStmt.executeQuery();

            		while(rset.next()) {
               			try (PreparedStatement insertStmt = conn.prepareStatement(insertQuery)) {
            				insertStmt.setString(1, username);
            				insertStmt.setString(2, rset.getString("gunType"));
            				insertStmt.setString(3, rset.getString("skinType"));
            				insertStmt.executeUpdate(); // Execute the insert statement
            			} catch (SQLException e) {
    						e.printStackTrace(); // Handle any SQL exceptions here
						}

            		}
            	}

            	//remove cart items
            	String removeQuery = "DELETE FROM cart_items";
            	try (PreparedStatement removeStmt = conn.prepareStatement(removeQuery)) {
            		 int rowsAffected = removeStmt.executeUpdate();
            		 System.out.println(rowsAffected + " rows were deleted.");
            	} catch (SQLException e) {
 				    e.printStackTrace();
    				// Handle any SQL exceptions here
 				}

			}else{
				//Record not inserted in DB
				out.print("<h2>Payment Failed!</h2>");
				//popup window
				out.println(failWindow);
			}

			//close connection
			st.close();
			conn.close();

		} catch(ClassNotFoundException e) {
			out.print("<h1>Something wrong!</h1>");
			e.printStackTrace();
		} catch(SQLException e) {
			out.print("<h1>Something wrong!</h1>");
			e.printStackTrace();
		}	
		out.println("</div></div>");
 		out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}	

}