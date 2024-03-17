import java.io.*;
import java.sql.*;
import jakarta.servlet.*;            // Tomcat 10
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
//mysql> create table user(userid varchar(20), password varchar(20));
//mysql> insert into user values('tan','12345');
//select * from user where userid = 'tan' and password = '12345';

@WebServlet("/LoginServlet")   
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginServlet() {
		super();
	}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String userId = request.getParameter("userId");
		String password = request.getParameter("password");

		//JDBC Connection
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/valomkt", "myuser", "xxxx");
			Statement st = conn.createStatement();
			
			String query = "select * from user where userid = '"+userId+"' and password = '"+password+"'";
			String update1 = "DELETE FROM currentuser";
			String update2 = "INSERT INTO currentuser VALUES ('" + userId +"')"; 
			ResultSet rs = st.executeQuery(query);
			
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

			if (rs.next()) {
				out.print("<h2>Hello, "+userId+" !</h2>");
				out.print("<h3>Login Successful.</h3><br>");
				out.print("<a href = 'Eshop.html'>GO BACK TO STORE</a>");
				
				try (Statement updateStmt = conn.createStatement()) {
    				int rowsAffected = updateStmt.executeUpdate(update1);
    			} catch (SQLException e) {
 					e.printStackTrace();
 				}

 				try (Statement updateStmt2 = conn.createStatement()) {
    				int rowsAffected = updateStmt2.executeUpdate(update2);
    			} catch (SQLException e) {
 					e.printStackTrace();
 				}
 			} else {
 				out.print("<h2>Invalid input !</h2>");
 				out.print("<h3>Username or Password is incorrect. </h3><br>");
 				out.print("<a href = 'login.html'>GO BACK TO LOGIN</a>");
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