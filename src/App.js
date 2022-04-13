import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import React, {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [userHobi, setHobi] = useState({
    hobi: [],
    response: [],
  });
  const [religion, setReligion] = useState("");
  const [message, setMessage] = useState("");
  const [tampil, setTampil] = useState(false);
  
  const inputName = (e) => {
    setName(e.target.value);
  }

  const inputBirth = (e) => {
    setBirth(e.target.value);
  }

  const inputGender = (e) => {
    setGender(e.target.value);
  }

  const inputHobi = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { hobi } = userHobi;
    // Case 1 : The user checks the box
    if (checked) {
      setHobi({
        hobi: [...hobi, value],
        response: [...hobi, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setHobi({
        hobi: hobi.filter((e) => e !== value),
        response: hobi.filter((e) => e !== value),
      });
    }
  };
  
  const inputReligion = (e) => {
    setReligion(e.target.value);
  }

  const inputMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  
  return (
    <div class="container">
      <h1>Biodata</h1>
      <form id="form-input" onSubmit={handleSubmit}>
        <div class="name-section mb-10">
          <label for="name">Nama Lengkap</label><br/>
          <input type="text" id="name" name="name" onChange={inputName}/>
        </div>
        <div class="birthday-section mb-10">
          <label for="birth">Tanggal Lahir</label><br/>
          <input type="date" id="birthday" name="birth" onChange={inputBirth}/>
        </div>
        <div class="gender-section mb-10">
          <label for="gender">Jenis Kelamin</label><br/>
          <div class="pilihan" id="genders">
            <input type="radio" name="gender" id="gender1" value="Laki-laki" onChange={inputGender}/>
            <label for="gender1">Laki-laki</label>
            <input type="radio" name="gender" id="gender2" value="Perempuan" onChange={inputGender}/>
            <label for="gender2">Perempuan</label>
            <input type="radio" name="gender" id="gender3" value="Other" onChange={inputGender}/>
            <label for="gender3">Other</label>
          </div>
        </div>
        <div class="hobby-section mb-10">
          <label for="hobby">Hobi</label><br/>
          <div class="pilihan" id="hobbies">
            <input type="checkbox" name="hobby" id="hobby1" value="Ngoding" onChange={inputHobi}/>
            <label for="hobby1">Ngoding</label>
            <input type="checkbox" name="hobby" id="hobby2" value="Rebahan" onChange={inputHobi}/>
            <label for="hobby2">Rebahan</label>
            <input type="checkbox" name="hobby" id="hobby3" value="Melamun" onChange={inputHobi}/>
            <label for="hobby3">Melamun</label>
            <input type="checkbox" name="hobby" id="hobby4" value="Baca Buku" onChange={inputHobi}/>
            <label for="hobby4">Baca Buku</label>
            <input type="checkbox" name="hobby" id="hobby5" value="Nonton Youtube" onChange={inputHobi}/>
            <label for="hobby5">Nonton Youtube</label>
            <input type="checkbox" name="hobby" id="hobby6" value="Dengerin Lagu" onChange={inputHobi}/>
            <label for="hobby6">Dengerin Lagu</label>
            <input type="checkbox" name="hobby" id="hobby7" value="Other" onChange={inputHobi}/>
            <label for="hobby7">Other</label>
          </div>
        </div>
        <div class="religion-section form-data mb-10">
        <label for="religion">Agama</label><br/>
        <select id="religion" name="religion-select" onChange={inputReligion}>
          <option value="" disable selected>Pilih agama</option>
          <option value="Buddha">Buddha</option>
          <option value="Hindu">Hindu</option>
          <option value="Islam">Islam</option>
          <option value="Katolik">Katolik</option>
          <option value="Tao">Tao</option>
          <option value="Protestan">Protestan</option>
          <option value="Other">Other</option>
        </select>
        </div>
        <div class="message-section mb-10">
          <label for="message">Pesan</label><br></br>
          <textarea id="message" name="message" onChange={inputMessage}/>
        </div>
        <Button type='submit' variant="primary" onClick={() => setTampil(prev => !prev)}>Submit</Button>{' '}
        {tampil &&
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="label-width">Label</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Nama</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th scope="row">Tanggal Lahir</th>
                <td>{birth}</td>
              </tr>
              <tr>
                <th scope="row">Jenis Kelamin</th>
                <td>{gender}</td>
              </tr>
              <tr>
                <th scope="row">Hobi</th>
                <td>{userHobi.response.join(", ")}</td>
              </tr>
              <tr>
                <th scope="row">Agama</th>
                <td>{religion}</td>
              </tr>
              <tr>
                <th scope="row">Pesan</th>
                <td>{message}</td>
              </tr>
            </tbody>
          </table>
        }
      </form>
    </div>
  );
}

export default App;