$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
        console.log($('td#name',this));
      $(this).toggle($('td#name',this).text().toLowerCase().indexOf(value) > -1);
    });
  });
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users", // Replace with your API endpoint
    method: "GET",
    dataType: "json",
    success: function (data) {
      let content = "";
      data.forEach(function (post) {
        content += `
        <tr>
                <td id ="name">${post.name}</td>
                 <td>${post.username}</td>
                 <td>${post.email}</td>
        </tr>`;
      });
      $("#myTable").html(content);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching data:", textStatus, errorThrown);
    },
  });
});

