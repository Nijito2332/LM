function toggleDescription(descId) {
  var description = document.getElementById(descId);

  if (!description) {
      console.error("Description element not found with ID: " + descId);
      return;
  }

  if (description.classList.contains("active")) {
      description.classList.remove("active");
  } else {
      var activeDescriptions = document.querySelectorAll('.descripcion.active');
      activeDescriptions.forEach(function (activeDesc) {
          activeDesc.classList.remove('active');
      });
      description.classList.add("active");
  }
}
