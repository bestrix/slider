import React, { useState } from "react";
import { render } from "react-dom";
import test from './script';
import './style.sass'
import './style.css'
test()



render(<h1>React is working</h1>, document.getElementById("App"));
// render(<h1>1111</h1>, document.getElementById("App"));