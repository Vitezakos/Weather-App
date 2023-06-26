class Daycards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    }).innerHTML = `<slot name="daycards"></slot>`;
  }
  connectedCallback() {
    this.innerHTML = `<section slot="daycards">
      <div class="daycards">
        <div class="daycards-card">
          <h2 class="daycards-title">Thursday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Friday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Saturday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Sunday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Monday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Tuesday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
        <div class="daycards-card">
          <h2 class="daycards-title">Wednesday</h2>
            <div class="daycards-details">
             <h2>Morning</h2>
             <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Afternoon</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Evening</h2>
              <h2>20</h2>
            </div>
            <div class="daycards-details">
              <h2>Overnight</h2>
              <h2>20</h2>
            </div>
        </div>
      </div>
    </section>`;
  }
}

customElements.define("day-cards", Daycards);
