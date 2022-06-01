var countre = 1;
function add_more_field() {
  countre += 1;
  html =
    '<div className="row" id="row' +
    countre +
    '">\
            <div className="col-8">\
                <input type="text" name="ingredient' +
    countre +
    '" class="form-control" ></input>\
            </div>\
        </div>';
  var form = document.getElementById("ingredient_form");
  form.innerHTML += html;
}
