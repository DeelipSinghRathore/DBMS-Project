import React from 'react'
import "../style/AddFound.css"
const AddFound = () => {

  
    
    return (
      <div class="main-block">
      <div class="left-part">
        <i class="fas fa-envelope"></i>
        <i class="fas fa-at"></i>
        <i class="fas fa-mail-bulk"></i>
      </div>
      <form action="/">
        <h1>ADD FOUND</h1>
        <div class="info">
          <input type="text" name="name" placeholder="Email" required></input>
          <input class="fname" type="text" name="name" placeholder="Found Nearby" required></input>
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile" required></input>
          <input type="text" name="name" placeholder="Title" required></input>
        </div>
        <p>Description</p>
        <div>
          <textarea rows="4" required></textarea>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
    
    )
}

export default AddFound