import React from "react";
import {
  Row,
  Col,
  Button,
  Image,
  FormControl,
  Modal,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as DEPLOYMENT from "./cards/deployment";
import * as PERILS from "./cards/perils";
import * as OBJECTIVES from "./cards/objectives";
import * as LOOT from "./cards/loot";
import * as INSTRUCTIONS from "./cards/instructions";
import { AiOutlineShareAlt } from "react-icons/ai";
import "./App.css";

const deploymentOptions = [
  "Ambush",
  "Backstab (Reinforcements)",
  "Backstab",
  "Beatdown (Reinforcements)",
  "Beatdown",
  "Dome Rush",
  "Free for All",
  "Home Turf",
  "In your Face",
  "Sniping Range",
  "Stand-off (Reinforcements)",
  "Stand-Off",
];

const lootOptions = [
  "Blaze of Glory",
  "Finish them Off",
  "Got it Covered",
  "Kidnap Job",
  "Loot their Corpses",
  "Sabotage",
  "Search the Area",
  "Settle a Score",
  "The Challenge",
  "The Hit",
  "The Package",
  "Wipe them Out",
];

const objectivesOptions = [
  "A Lesson in Pain",
  "Burn them Out",
  "Critter Hunt",
  "Escape the Dome",
  "Flank 'em",
  "Killbox",
  "King of the Hive",
  "Last Gang Standing",
  "Rush 'em",
  "Survival of the Meanest",
  "Tunnel Clash",
  "Turf War",
];

const perilsOptions = [
  "Ammo Shortage",
  "Falling Debris",
  "Gas Leak",
  "Hive Critters",
  "Hive Plague",
  "Horrors in the Dark",
  "Lair of the Beast",
  "Pitch Black",
  "Poisoned Air",
  "Radioactive Rain",
  "Rotten Walls",
  "Unstable Ground",
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deployment: 0,
      perils: 0,
      objective: 0,
      lootA: 0,
      lootB: 0,
      modal: {
        visible: false,
        cardType: "",
      },
      lootAHidden: true,
      lootBHidden: true,
      showAlert: false,
    };
  }

  componentDidMount() {
    if (window.location.search) {
      this.loadFromUrl();
    }
  }

  loadFromUrl = () => {
    const search = window.location.search;
    const splitQuestionMark = search.split("?");
    const splitDashes = splitQuestionMark[1].split("-");

    this.setState({
      deployment: splitDashes[0],
      perils: splitDashes[1],
      objective: splitDashes[2],
      lootA: splitDashes[3],
      lootB: splitDashes[4],
    });
  };

  randNumb = () => {
    // chooses number randomly between 1 and 12
    return Math.floor(Math.random() * 12) + 1;
  };

  generate = () => {
    // chooses numbers randomly (1 -> 12) and displays them. Players can then randomCard.
    this.setState(
      {
        deployment: this.randNumb(),
        perils: this.randNumb(),
        objective: this.randNumb(),
        lootA: this.randNumb(),
        lootB: this.randNumb(),
      },
      () =>
        window.history.pushState(
          "",
          "Open Hive War",
          `/open-hive-war?${this.state.deployment}-${this.state.perils}-${this.state.objective}-${this.state.lootA}-${this.state.lootB}`
        )
    );
  };

  selectCard = (cardType, value) => {
    this.setState(
      {
        [cardType]: value,
      },
      () => this.setNewSearch(cardType, value)
    );
  };

  setNewSearch = (cardType, value) => {
    let search = window.location.search;
    const splitQuestionMark = search.split("?");
    let splitDashes = splitQuestionMark[1].split("-");
    if (cardType == "deployment") {
      splitDashes[0] = value;
    } else if (cardType == "perils") {
      splitDashes[1] = value;
    } else if (cardType == "objective") {
      splitDashes[2] = value;
    } else if (cardType == "lootA") {
      splitDashes[3] = value;
    } else if (cardType == "lootB") {
      splitDashes[4] = value;
    }

    window.history.pushState(
      "",
      "Open Hive War",
      `/open-hive-war?${splitDashes[0]}-${splitDashes[1]}-${splitDashes[2]}-${splitDashes[3]}-${splitDashes[4]}`
    );
  };

  randomCard = (cardType) => {
    const value = this.randNumb();
    this.setState(
      {
        [cardType]: value,
      },
      () => this.setNewSearch(cardType, value)
    );
  };

  reveal = (cardToReveal) => {
    if (cardToReveal == "lootA") {
      this.setState({
        lootAHidden: false,
        lootBHidden: true,
      });
    } else {
      this.setState({
        lootAHidden: true,
        lootBHidden: false,
      });
    }
  };

  hide = () => {
    this.setState({
      lootAHidden: true,
      lootBHidden: true,
    });
  };

  instructions = () => {
    return (
      <Row className="card-row">
        <div className="card-col">
          <div className="card-box">
            <Image
              className="card"
              id="instruction"
              src={INSTRUCTIONS.default.card1}
            />
          </div>
        </div>

        <div className="card-col">
          <div className="card-box">
            <Image
              className="card"
              id="instruction"
              src={INSTRUCTIONS.default.card2}
            />
          </div>
        </div>

        <div className="card-col">
          <div className="card-box">
            <Image
              className="card"
              id="instruction"
              src={INSTRUCTIONS.default.card3}
            />
          </div>
        </div>
      </Row>
    );
  };

  objective = () => {
    if (!this.state.objective) return;
    const card = `card${this.state.objective}`;
    return (
      <div className="card-col">
        <h3>Objective</h3>
        <div className="card-box">
          <div className="overlay" id="objective">
            <Button
              onClick={() => this.randomCard("objective")}
              className="overlay-btn"
              size="sm"
            >
              Random
            </Button>
            <Button
              className="overlay-btn"
              size="sm"
              onClick={() => this.showModal("objective")}
            >
              Choose
            </Button>
          </div>
          <Image
            className="card"
            id="objective"
            src={OBJECTIVES.default[card]}
          />
        </div>
      </div>
    );
  };

  deployment = () => {
    if (!this.state.deployment) return;
    const card = `card${this.state.deployment}`;
    return (
      <div className="card-col">
        <h3>Deployment</h3>
        <div className="card-box">
          <div className="overlay" id="deployment">
            <Button
              onClick={() => this.randomCard("deployment")}
              className="overlay-btn"
              size="sm"
            >
              Random
            </Button>
            <Button
              className="overlay-btn"
              size="sm"
              onClick={() => this.showModal("deployment")}
            >
              Choose
            </Button>
          </div>
          <Image
            className="card"
            id="deployment"
            src={DEPLOYMENT.default[card]}
          />
        </div>
      </div>
    );
  };

  perils = () => {
    if (!this.state.perils) return;
    const card = `card${this.state.perils}`;
    return (
      <div className="card-col">
        <h3>Perils</h3>
        <div className="card-box">
          <div className="overlay" id="perils">
            <Button
              onClick={() => this.randomCard("perils")}
              className="overlay-btn"
              size="sm"
            >
              Random
            </Button>
            <Button
              className="overlay-btn"
              size="sm"
              onClick={() => this.showModal("perils")}
            >
              Choose
            </Button>
          </div>
          <Image className="card" id="perils" src={PERILS.default[card]} />
        </div>
      </div>
    );
  };

  lootA = () => {
    if (!this.state.lootA) return;
    const card = `card${this.state.lootA}`;

    if (this.state.lootAHidden) {
      return (
        <div className="card-col">
          <h3>Player 1's Loot</h3>
          <div className="card-box">
            <div className="hidden-card" id="loot">
              <Button
                onClick={() => this.reveal("lootA")}
                className="overlay-btn"
                size="sm"
              >
                Reveal
              </Button>
            </div>
            <div className="card" id="loot" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-col">
          <h3>Player 1's Loot</h3>
          <div className="card-box">
            <div className="overlay" id="loot">
              <Button
                onClick={() => this.randomCard("lootA")}
                className="overlay-btn"
                size="sm"
              >
                Random
              </Button>
              <Button
                className="overlay-btn"
                size="sm"
                onClick={() => this.showModal("lootA")}
              >
                Choose
              </Button>
              <Button onClick={this.hide} className="overlay-btn" size="sm">
                Hide
              </Button>
            </div>
            <Image className="card" id="loot" src={LOOT.default[card]} />
          </div>
        </div>
      );
    }
  };

  lootB = () => {
    if (!this.state.lootB) return;
    const card = `card${this.state.lootB}`;

    if (this.state.lootBHidden) {
      return (
        <div className="card-col">
          <h3>Player 2's Loot</h3>
          <div className="card-box">
            <div className="hidden-card" id="loot">
              <Button
                onClick={() => this.reveal("lootB")}
                className="overlay-btn"
                size="sm"
              >
                Reveal
              </Button>
            </div>
            <div className="card" id="loot" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="card-col">
          <h3>Player 2's Loot</h3>
          <div className="card-box">
            <div className="overlay" id="loot">
              <Button
                onClick={() => this.randomCard("lootB")}
                className="overlay-btn"
                size="sm"
              >
                Random
              </Button>
              <Button
                className="overlay-btn"
                size="sm"
                onClick={() => this.showModal("lootB")}
              >
                Choose
              </Button>
              <Button onClick={this.hide} className="overlay-btn" size="sm">
                Hide
              </Button>
            </div>
            <Image className="card" id="loot" src={LOOT.default[card]} />
          </div>
        </div>
      );
    }
  };

  renderCard = (card) => {
    return <Image className="card" src={card} />;
  };

  name = () => {
    return (
      <div className="footer">
        Developed by{" "}
        <a target="_blank" href="https://www.instagram.com/buttcheeksio/?hl=en">
          buttcheeksio
        </a>
      </div>
    );
  };

  showModal = (cardType) => {
    this.setState({
      modal: {
        ...this.state.modal,
        visible: true,
        cardType: cardType,
      },
    });
  };

  hideModal = () => {
    this.setState({
      modal: {
        ...this.state.modal,
        visible: false,
        cardType: "",
      },
    });
  };

  modal = () => {
    const { visible, cardType } = this.state.modal;
    let title;
    let options = [];
    if (cardType == "lootA") {
      title = "Loot A";
      options = lootOptions;
    } else if (cardType == "lootB") {
      title = "Loot B";
      options = lootOptions;
    } else if (cardType == "deployment") {
      title = "Deployment";
      options = deploymentOptions;
    } else if (cardType == "objective") {
      title = "Objective";
      options = objectivesOptions;
    } else if (cardType == "perils") {
      title = "Perils";
      options = perilsOptions;
    }
    return (
      <Modal show={visible} onHide={this.hideModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {options.map((item, i) => this.renderOptionSelect(item, i))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  renderOptionSelect = (item, i) => {
    const { cardType } = this.state.modal;
    const selected = this.state[cardType] == i + 1 ? true : false;
    return (
      <div
        onClick={() => this.selectCard(cardType, i + 1)}
        className="option-select"
        id={selected ? "selected" : ""}
        key={`selectOption - ${item} - ${i}`}
      >
        {item}
      </div>
    );
  };

  copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    this.setState({ showAlert: true });
  };

  shareBtn = () => {
    return (
      <AiOutlineShareAlt className="share-btn" onClick={this.copyToClipboard} />
    );
  };

  alert = () => {
    return (
      <Alert
        dismissible
        variant="info"
        transition
        show={this.state.showAlert}
        onClose={() => this.setState({ showAlert: false })}
      >
        Copied to clipboard!
      </Alert>
    );
  };

  render() {
    return (
      <div className="App">
        {this.alert()}
        {this.shareBtn()}
        {this.modal()}
        <h1 className="title">Open Hive War Mission Generator</h1>
        <Row className="gen-btn-row">
          <Button className="gen-btn" onClick={this.generate}>
            Generate Mission
          </Button>
        </Row>

        {this.instructions()}
        <Row className="card-row">
          {this.deployment()}
          {this.objective()}
          {this.perils()}
        </Row>
        <Row className="card-row">
          {this.lootA()}
          {this.lootB()}
        </Row>
        {this.name()}
      </div>
    );
  }
}

export default App;
