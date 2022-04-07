import "./styles.css"

export default function FractInp() {


  return (
    <div class="container">
      <div class="bracket">(</div>
      <div class="inp-frac">
        <div class="inp-container">
          <div contenteditable="true" class="inp"></div>
        </div>
        <div class="inp-container">
          <div contenteditable="true" class="inp"></div>
        </div>
      </div>
      <div class="bracket">)</div>
    </div>
  );
}