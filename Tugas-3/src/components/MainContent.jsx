// MainContent.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainContent = () => {
  const [pesan, setPesan] = useState([]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/tentang" exact component={AboutPage} />
          <Route path="/kontak" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainContent;
