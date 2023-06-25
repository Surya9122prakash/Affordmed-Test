import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <h1>Train Reservation System</h1>
      
    <form>
    <label for="name">Name:</label>
    <input type="text" id="username" name="username" required><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    
    <label for="from">From:</label>
    <input type="text" id="Arrival" name="Arrival" required><br><br>
    
    <label for="to">To:</label>
    <input type="text" id="Departure" name="Departure" required><br><br>
    
    <label for="date">Date:</label>
    <input type="date" id="date" name="date" required><br><br>
    
    <label for="class">Class:</label>
    <select id="class" name="class" required>
      <option value="">Select Class</option>
      <option value="economy">A Class(Economy)</option>
      <option value="business">Business Class</option>
    </select><br><br>
    
    <input type="submit" value="Submit">
  </form>


      </div>
  );
}

export default App;
