function removeItem(gunType, skinType) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "RemoveItemServlet", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function() {
    if (xhr.status === 200) {
      // If successful, remove the row from the table or refresh the page
      alert('Item removed successfully!');
      location.reload();
    } else {
      alert('Error removing item.');
    }
  };
  xhr.send("gunType=" + encodeURIComponent(gunType) + "&skinType=" + encodeURIComponent(skinType));
}

