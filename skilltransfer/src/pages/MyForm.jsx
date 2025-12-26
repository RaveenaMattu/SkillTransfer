import { useState } from "react";

function MyForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzKtw_9exfLmTFuXTPwPtLupnvBPJg6Nw1ER6_03bzqeRdS3L6T_GfZ_ooBhcyFYfZEVg/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.redirect) {
        // Redirect user to Google Drive file
        window.location.href = result.redirect;
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Phone" required />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default MyForm;
