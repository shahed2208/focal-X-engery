import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import header from './compoments/layouts/header';

function App() {
  return (
    <div className="App">   
        
 <div><img src="sh.png" height="130" width="130"></div>
         <h1 class="logo">Hexashop </h1><i>Online shopping</i>
         
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Men's</a></li>
           <li><a href="#">Women's</a></li>
           <li><a href="#">Kid's</a></li>
           <li><a href="#">Pages <i class="fas fa-caret-down"></i></a>
             <li><a href="#">Features <i class="fas fa-caret-down"></i></a>
                 <li><a href="#">Explore</a></li>
             </li></li></ul></div>
             <hr>   
    <div class="section">
        <div class="leftside">
            <div class="leftpc">
                <h1>We are Hexashop</h1>
                <i>Awsome, clean & creative HTML5 template
                </i>
                <br>
                <button class="butt">Purchase Now!</button>
            </div>
        </div>
        <div class="Ry">
            <div class="r1">
                <div class="women">
                    <div class="rpic">
                        <h2>Women</h2>
                        <i>Best clothes for women</i>
                    </div>
                </div>
                <div class="men-section">
                    <div class="rpic">
                        <h2>Men</h2>
                        <i>Best clothes for men</i>
                    </div>
                </div>
            </div>
            <div class="t">
                <div class="kids">
                    <div class="rpic">
                        <h2>Kids</h2>
                        <i>Best clothes for kids</i>
                    </div>
                </div>
                <div class="access">
                    <div class="rpic">
                        <h2>Accessories</h2>
                        <i>Best trend accessories</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>  
    <div>
        <div class="men-section">
            <h2>Men's Latest</h2>
            <i>Details to details is what makes Hexashop different from other themes</i>
        </div>
        <br>
        <div class="o">
            <div><img src="prev.png" class="q"></div>
            <div>
                <img src="i.jpg">
                <h3>Classic Spring</h3>
                <p>$120.00</p>
            </div>
            <div>
                <img src="j.jpg">
                <h3>Air Force 1 X</h3>
                <p>$90.00</p>
            </div>
            <div>
                <img src="o.jpg">
                <h3>Love Nana '20</h3>
                <p>$150.00</p>
            </div>
            <div>
                <img src="next.png" class="q">
            </div>
        </div>
    </div>
  
    <hr>

    <div>
        <div class="l-section">
            <h2>women's Latest</h2>
            <i>Details to details is what makes Hexashop different from other themes/i>
        </div>
        <br>
        <div class="o">
            <div><img src="prev.png"></div>
            <div>
                <img src="l.jpg">
                <h3>New Green Jacket</h3>
                <p>$75.00</p>
            </div>
            <div>
                <img src="m.jpg">
                <h3>Classic Dress</h3>
                <p>$45.00</p>
            </div>
            <div>
                <img src="women-03.jpg">
                <h3>Spring Collection</h3>
                <p>$130.00</p>
            </div>
            <div>
                <img src="next.png">
            </div>
        </div>
    </div>
  
    <hr>

    <div class="kid-section">
        <div>
            <h2>Kid's Latest</h2>
            <i>Details to details is what makes Hexashop different from other themes</i>
        </div>
        <br>
        <div class="o">
            <div><img src="prev.png"></div>
            <div>
                <img src="e.jpg">
                <h3>School Collection</h3>
                <p>$80.00</p>
            </div>
            <div >
                <img src="f.jpg">
                <h3>Summer Cap</h3>
                <p>$12.00</p>
            </div>
            <div>
                <img src="g.jpg">
                <h3>Classic Kid</h3>
                <p>$30.00</p>
            </div>
            <div>
                <img src="next.png">
            </div>
        </div>
        </div>
    </div>
    <hr></hr>
    </div>
  );
}

export default App;
