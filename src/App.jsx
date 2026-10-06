import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    interests: [],
    city: "",
    note: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let newInterests = [...formData.interests];

      if (checked) {
        newInterests.push(value);
      } else {
        newInterests = newInterests.filter((item) => item !== value);
      }

      setFormData({
        ...formData,
        interests: newInterests,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Ad daxil edin";
    }

    if (!formData.email) {
      newErrors.email = "Düzgün email daxil edin";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Düzgün email daxil edin";
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Şifrə ən azı 6 simvol olmalıdır";
    }

    if (!formData.gender) {
      newErrors.gender = "Cins seçin";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Ən azı bir seçim edin";
    }

    if (!formData.city) {
      newErrors.city = "Şəhər seçin";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log(formData);
      setSuccess("Form uğurla göndərildi!");
    } else {
      setSuccess("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ad</label>

        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email</label>

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Şifrə</label>

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <div>
        <p>Cins</p>

        <label>
          <input
            name="gender"
            value="male"
            type="radio"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Kişi
        </label>

        <label>
          <input
            name="gender"
            value="female"
            type="radio"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Qadın
        </label>

        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      <div>
        <p>Maraq dairələri</p>

        <label>
          <input
            type="checkbox"
            name="interests"
            value="Musiqi"
            onChange={handleChange}
          />
          Musiqi
        </label>

        <label>
          <input
            type="checkbox"
            name="interests"
            value="İdman"
            onChange={handleChange}
          />
          İdman
        </label>

        <label>
          <input
            type="checkbox"
            name="interests"
            value="Proqramlaşdırma"
            onChange={handleChange}
          />
          Proqramlaşdırma
        </label>

        {errors.interests && <p style={{ color: "red" }}>{errors.interests}</p>}
      </div>

      <div>
        <label>Şəhər</label>

        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Şəhər seçin</option>
          <option value="baku">Bakı</option>
          <option value="ganja">Gəncə</option>
          <option value="sheki">Şəki</option>
        </select>

        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
      </div>

      <div>
        <label>Qeyd</label>

        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}></textarea>
      </div>

      <button type="submit">Göndər</button>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}

export default App;
