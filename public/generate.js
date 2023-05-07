function generate() {


    document.getElementById("generateButton").addEventListener("click", function() {
      window.open("https://go.dev/play/p/7ltvaj8lhRl", "_blank");
  });
  
  const namespace_id = document.getElementById("namespace_id").value;
  const message = document.getElementById("message").value;
  if (namespace_id && message) {
    const result = document.getElementById("result");
    result.innerHTML = `Namespace ID: ${namespace_id} <br> Mesaj: ${message}`;
  } else {
    alert("Please fill in all fields.");
  }
    
    }
