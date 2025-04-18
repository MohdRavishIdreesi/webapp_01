document.getElementById('feedbackForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    const res = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    const data = await res.json();
    document.getElementById('response').textContent = data.message;
    this.reset();
  });
  