import Slots from "./Slots"

const SecondPart = () => (
    <div className="secondPart">
        <div className="secondPart-top">
            <h1>Madagascar</h1>
            <h3>Total Population</h3>
            <div className="data-box">
                <div className="data-sheet"></div>
                <section>
                    <h3>INR 30000</h3>
                    <p>Total IDR 40.000 </p>
                </section>
            </div>
        </div>
        <div className="secondPart-mid">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
            </ul>
        </div>
        <Slots name="Dipish Bisht"/>
        <Slots name="Bhupender Jogi"/>
    </div>
);

export default SecondPart;