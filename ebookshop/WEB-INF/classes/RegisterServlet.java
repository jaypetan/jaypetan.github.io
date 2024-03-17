import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//mysql> create table user(userid varchar(20), password varchar(20));
//mysql> insert into user values('tan','12345');
//select * from user where userid = 'tan' and password = '12345';

@WebServlet("/RegisterServlet")   
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RegisterServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String userId = request.getParameter("userId");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		String phoneStr = request.getParameter("phone");
		int phone = 0;

		out.println("<link rel='stylesheet' href='eshopstyle_template.css?v=2'>");
		out.println("<div class = 'header'><h1> Registration Page </h1></div>");
		
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

        if (phoneStr != null && !phoneStr.isEmpty()) {
    		try {
        		phone = Integer.parseInt(phoneStr);
    		} catch (NumberFormatException e) {
        		out.println("<h2>Invalid phone number</h2>");
            	out.println("<h3>===You have input=== <br> "  + phoneStr + "</h3>");
            	out.print("<a href = 'register.html'>GO BACK TO REGISRATION</a>");
            	out.println("</body></html>");
            	return; 
    		}
		}	
		if (userId == null || userId.isEmpty() || password == null || password.isEmpty() || email == null || email.isEmpty()) {
            out.println("<h2>Missing parameters. Please input all required options.</h2>");
            out.println("<h3>===You have input=== <br> " + userId + " " + password + " " + email + " " + phoneStr + "</h3>");
            out.print("<a href = 'register.html'>GO BACK TO REGISRATION</a>");
            out.println("</body></html>");
            return; 
         }
		//JDBC Connection
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/valomkt", "myuser", "xxxx");
			Statement st = conn.createStatement();
			
			String query = "select * from user where userid = '" +userId+ "' or email = '" +email+ "' or phone = '" +phone+ "'";
			String update = "INSERT INTO user(userid, password, email, phone) VALUES ('" +userId+ "','" +password+ "','" +email+ "','" +phoneStr+"')"; 
			ResultSet rs = st.executeQuery(query);
			
			if (rs.next()) {
				out.print("<h2> The data is already in our server!</h2>");
				out.print("<h3> Please check none of the inputs are repeated.</h3><br>");
				out.print("<a href = 'login.html'>GO BACK TO LOGIN</a>");
				
 			} else {
 				out.print("<h2>User Added!</h2>");
 				out.print("<h3>Please Log In</h3><br>");
 				out.print("<a href = 'login.html'>GO BACK TO LOGIN</a>");
 				
 				try (Statement updateStmt = conn.createStatement()) {
    				int rowsAffected = updateStmt.executeUpdate(update);
    			} catch (SQLException e) {
 					e.printStackTrace();
 				}
 			}

 			out.println("</div></div>");
 			out.println("<div class='footer'><h5> Made by JunPeng & HongYu </h5></div>");

		} catch (ClassNotFoundException e){
			out.print("<h1>Login Failed because of Server Exception</h1><br>");			
			e.printStackTrace();
		} catch (SQLException e){
			out.print("<h1>Login Failed because of Server Exception</h1><br>");	
			e.printStackTrace();
		}	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}	

}