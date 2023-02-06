//Grab Employee Designation

let $selector = $("#employee");
let $designations = $("#designations");
$selector
  .change(function () {
    var toEnable = $("option:selected", $selector).data("for");
    $designations.children().css("display", "none");
    $("#" + toEnable).css("display", "block");
  })
  .change();
//

 //Grab WareHouse Name

 let $wareSelector = $("#warehouse");
              let $wareNames = $("#warehouseName");
              $wareSelector
                .change(function () {
                  let toEnable = $("option:selected", $wareSelector).data(
                    "for"
                  );
                  $wareNames.children().css("display", "none");
                  $("#" + toEnable).css("display", "block");
                })
                .change();
//

//Add material Field

let counter = 1;

let textBox = "";
let hob = document.getElementById("hob");
function addBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("id", "box_" + counter);
  let textBox =
    "<label>Select Material:" +
    "</label><input type='text' name='materials[]' class='span6' placeholder='Enter Material' id='materials_" +
    counter +
    "'><input class='addbox' type='button' value='-' onclick='removeBox(this)'>";
  div.innerHTML = textBox;
  hob.appendChild(div);
  counter++;
  document.getElementById("quantity").value = counter;
}
function removeBox(ele) {
  ele.parentNode.remove();
  counter--;
  document.getElementById("quantity").value = counter;
}

//

//Add Finished Product's Div

function addRow() {
    const div = document.createElement("div");

    div.className = "rowsToAdd";

    div.innerHTML = `<div class="rowsToAdd">
  <div class="form-group">
    <label class="control-label">Product Name :</label>
    <div class="controls">
      <input
        type="text"
        class="span11"
        id="Name"
        placeholder="Enter Name"
        value=""
      />
    </div>
  </div>
  <div class="form-group">
    <label class="control-label">Model :</label>
    <div class="controls">
      <input
        type="text"
        class="span11"
        id="model"
        placeholder="enter model"
        value=""
        
      />
    </div>
  </div>

  <div class="form-group">
    <label class="control-label">size :</label>
    <div class="controls">
      <input
        type="text"
        class="span11"
        id="size"
        placeholder="enter size"
        value=""
      
      />
    </div>
  </div>

  <div class="form-group">
    <label class="control-label">Finished Quantity :</label>
    <div class="controls">
      <input
        type="text"
        class="fQuantity"
        name="fQuantity";
        id="fQuantity"
        placeholder="Finished Quantity"
        onblur="findTotal()"
      
      />
    </div>
  </div>
  <input type="button" class="addButtonTwo" value="+" onclick="addRow()" />
 
</div>
<div id="formTwoContainer">

</div>
   
    <input type="button" class="removeButtonTwo" value="-" onclick="removeRow(this)" />
  `;

    document.querySelector('.formTwoContainer').appendChild(div);
  }

  function removeRow(input) {
    document.querySelector(".formTwoContainer").removeChild(input.parentNode);
  }

//

//Find Final Quantity
function findTotal(){
    let arr = document.getElementsByName('fQuantity');
    let tot=0;
    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('finalQuantity').value = tot;
}
//

