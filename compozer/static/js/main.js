(this.webpackJsonpcompozer = this.webpackJsonpcompozer || []).push([
    [0], {
        43: function(e, n, t) {
            e.exports = t(66)
        },
        65: function(e, n, t) {},
        66: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(0),
                r = t.n(a),
                o = t(20),
                i = t.n(o),
                l = t(8),
                c = t(17),
                s = t(18),
                u = t(7),
                m = t.n(u),
                d = (new m.a.Volume).toMaster(),
                p = new m.a.Gain(.5).toMaster(),
                f = new m.a.FMSynth({
                    harmonicity: 3.01,
                    modulationIndex: 14,
                    oscillator: {
                        type: "triangle"
                    },
                    envelope: {
                        attack: .2,
                        decay: .3,
                        sustain: .1,
                        release: 1.2
                    },
                    modulation: {
                        type: "square"
                    },
                    modulationEnvelope: {
                        attack: .01,
                        decay: .5,
                        sustain: .2,
                        release: .1
                    }
                }).chain(p, d);
            f.id = 5, f.name = "fm";
            var g = (new m.a.MembraneSynth).chain(p, d);
            g.id = 1, g.name = "membrane";
            var h = (new m.a.AMSynth).chain(p, d);
            h.id = 2, h.name = "am";
            var v = (new m.a.PluckSynth).chain(p, d);
            v.id = 3, v.name = "pluck";
            var b = (new m.a.DuoSynth).chain(p, d);
            b.id = 4, b.name = "duo";
            var y = new m.a.PolySynth(10, m.a.Synth, {
                oscillator: {
                    type: "fatsawtooth50",
                    count: 3,
                    spread: 30
                },
                envelope: {
                    attack: .2,
                    decay: .1,
                    sustain: .1,
                    release: .1,
                    attackCurve: "exponential"
                }
            }).chain(p, d);
            y.id = 0, y.name = "poly";
            var x = (new m.a.FMSynth).chain(p, d);
            x.id = 6, x.name = "fmBass";
            var w = (new m.a.MembraneSynth).chain(p, d);
            w.id = 7, w.name = "membraneBass";
            var k = new m.a.AMSynth({
                volume: -18,
                harmonicity: 3.999,
                oscillator: {
                    type: "square"
                },
                envelope: {
                    attack: .03,
                    decay: .3,
                    sustain: .7,
                    release: .8
                },
                modulation: {
                    volume: 12,
                    type: "square6"
                },
                modulationEnvelope: {
                    attack: 2,
                    decay: 3,
                    sustain: .8,
                    release: .1
                }
            }).chain(p, d);
            k.id = 8, k.name = "amBass";
            var E = new m.a.Synth({
                portamento: 0,
                oscillator: {
                    type: "square4"
                },
                envelope: {
                    attack: 2,
                    decay: 1,
                    sustain: .2,
                    release: 2
                }
            }).chain(p, d);
            E.id = 9, E.name = "pluckBass";
            var O = (new m.a.DuoSynth).chain(p, d);
            O.id = 10, O.name = "duoBass";
            var j = (new m.a.PolySynth).chain(p, d);
            j.id = 11, j.name = "polyBass";
            var C = new m.a.MonoSynth({
                portamento: .08,
                oscillator: {
                    partials: [2, 1, 3, 2, .4]
                },
                filter: {
                    Q: 4,
                    type: "lowpass",
                    rolloff: -48
                },
                envelope: {
                    attack: .04,
                    decay: .06,
                    sustain: .4,
                    release: .1
                },
                filterEnvelope: {
                    attack: .01,
                    decay: .1,
                    sustain: .6,
                    release: 1.5,
                    baseFrequency: 50,
                    octaves: 3.4
                }
            }).toMaster();
            C.id = 12, C.name = "bass";
            var S = new m.a.Sampler({
                A0: "A0.[mp3|ogg]",
                C1: "C1.[mp3|ogg]",
                "D#1": "Ds1.[mp3|ogg]",
                "F#1": "Fs1.[mp3|ogg]",
                A1: "A1.[mp3|ogg]",
                C2: "C2.[mp3|ogg]",
                "D#2": "Ds2.[mp3|ogg]",
                "F#2": "Fs2.[mp3|ogg]",
                A2: "A2.[mp3|ogg]",
                C3: "C3.[mp3|ogg]",
                "D#3": "Ds3.[mp3|ogg]",
                "F#3": "Fs3.[mp3|ogg]",
                A3: "A3.[mp3|ogg]",
                C4: "C4.[mp3|ogg]",
                "D#4": "Ds4.[mp3|ogg]",
                "F#4": "Fs4.[mp3|ogg]",
                A4: "A4.[mp3|ogg]",
                C5: "C5.[mp3|ogg]",
                "D#5": "Ds5.[mp3|ogg]",
                "F#5": "Fs5.[mp3|ogg]",
                A5: "A5.[mp3|ogg]",
                C6: "C6.[mp3|ogg]",
                "D#6": "Ds6.[mp3|ogg]",
                "F#6": "Fs6.[mp3|ogg]",
                A6: "A6.[mp3|ogg]",
                C7: "C7.[mp3|ogg]",
                "D#7": "Ds7.[mp3|ogg]",
                "F#7": "Fs7.[mp3|ogg]",
                A7: "A7.[mp3|ogg]",
                C8: "C8.[mp3|ogg]"
            }, {
                release: 1,
                baseUrl: "./audio/salamander/"
            }).chain(p, d);
            S.id = 13, S.name = "salamander";
            var N = [y, g, h, v, b, f, x, w, k, E, O, j, C, S],
                A = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return function(e) {
                        return n.reduceRight((function(e, n) {
                            return n(e)
                        }), e)
                    }
                },
                D = t(11),
                F = t(38),
                V = t(13),
                z = t(25),
                M = {
                    white: "#fff",
                    black: "#000",
                    almostBlack: "#2c2e2f",
                    battleship: "#484949",
                    boulder: "#7a7979",
                    silverSandAlt: "#a0a0a0",
                    silverSand: "#bfc3c3",
                    whiteSmoke: "#eaeaea",
                    fog: "#f0f0f0",
                    trafficCone: "#f60",
                    taosSky: "#09c",
                    bluebee: "#4dc2be",
                    kermit: "#6bb220",
                    lemonade: "#fc0",
                    tutu: "#f13c68",
                    recordRed: "#f00",
                    boxShadow: "rgba(0, 0, 0, 0.16)",
                    taosSkyTint: "#66c2e0",
                    trafficConeTint: "#ffa366",
                    orange: "#ECA400",
                    lightyellow: "#EAF8BF",
                    seablue: "#006992",
                    koamaru: "#27476E",
                    oxford: "#001D4A"
                };

            function P() {
                var e = Object(D.a)(["\n  position: relative;\n\n  div.midi-selection {\n    background: ", ";\n    padding: 1rem 0.5rem;\n    display: flex;\n    flex-flow: column;\n  }\n\n  div.title {\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n    h3 {\n      font-size: 1rem;\n      margin: 0;\n    }\n    span.disclaimer {\n      display: block;\n      font-size: 0.8rem;\n      font-weight: 400;\n      margin-top: 10px;\n    }\n  }\n\n  div.select-menu {\n    position: relative;\n    padding: 1rem;\n    p.loading {\n      color: white;\n      // position: absolute;\n      // bottom: -2rem;\n      text-align: center;\n    }\n  }\n\n  div.play-controls {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    button {\n      -webkit-appearance: none;\n      padding: 0.5rem 1rem;\n      max-width: 100px;\n      font-size: 1.2rem;\n      font-weight: 700;\n      color: white;\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      &.play-button {\n        background: ", ";\n      }\n      &.stop-button {\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n"]);
                return P = function() {
                    return e
                }, e
            }
            var I = Object(V.a)((function(e) {
                var n = e.className,
                    t = e.player,
                    o = e.children,
                    i = e.musicStarted;
                Object(a.useEffect)((function() {
                    i.value ? k() : E()
                }), [i]);
                var c = Object(a.useState)("beethoven"),
                    s = Object(l.a)(c, 2),
                    u = s[0],
                    d = s[1];
                Object(a.useEffect)((function() {
                    i.setValue(!1), m.a.Transport.cancel(0), w().then((function(e) {
                        return console.info("midi file effect")
                    }))
                }), [u, t]);
                var p = Object(a.useState)(!0),
                    f = Object(l.a)(p, 2),
                    g = f[0],
                    h = f[1],
                    v = Object(a.useState)(null),
                    b = Object(l.a)(v, 2),
                    y = b[0],
                    x = b[1],
                    w = function() {
                        return F.Midi.fromUrl("./audio/".concat(u, ".mid")).then((function(e) {
                            var n = [];
                            e.tracks.forEach((function(e) {
                                e.notes.forEach((function(e) {
                                    var t = {
                                        note: e.name,
                                        duration: e.duration,
                                        time: e.time,
                                        velocity: e.velocity
                                    };
                                    n.push(t)
                                }))
                            }));
                            var a = new m.a.Part((function(e, n) {
                                t.triggerAttackRelease(n.note, n.duration, e, n.velocity)
                            }), n);
                            x(a), setTimeout((function() {
                                return h(!1)
                            }), 500)
                        }))
                    },
                    k = function() {
                        y.start("+0.01s"), m.a.Transport.start("+0.01s"), setTimeout((function() {
                            return console.info(m.a.Transport.state)
                        }), 500)
                    },
                    E = function() {
                        m.a.Transport.stop(m.a.now()), console.info(m.a.Transport.state)
                    };
                return r.a.createElement("div", {
                    className: n
                }, r.a.createElement("div", {
                    className: "midi-selection"
                }, r.a.createElement("div", {
                    className: "title"
                }, r.a.createElement("h3", null, "1) Choose a MIDI file from the list.", " ", r.a.createElement("span", {
                    className: "disclaimer"
                }, "(It can take a second to load sometimes.)"))), r.a.createElement("div", {
                    className: "select-menu"
                }, r.a.createElement(z.a, {
                    options: [{
                        value: "beethoven",
                        label: "Beethoven"
                    }, {
                        value: "tetris",
                        label: "Tetris"
                    }],
                    onChange: function(e) {
                        return n = e.value, h(!0), d(n), void w();
                        var n
                    },
                    placeholder: "Beethoven"
                }), g && r.a.createElement("p", {
                    className: "loading"
                }, "Loading..."))), o)
            }))(P(), M.koamaru, M.kermit, M.recordRed, M.orange);

            function T() {
                var e = Object(D.a)(["\n  position: relative;\n\n  div.instrument-selection {\n    background: ", ";\n    padding: 1rem 0.5rem;\n    display: flex;\n    flex-flow: column;\n  }\n\n  div.title {\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n    h3 {\n      font-size: 1rem;\n      margin: 0;\n    }\n    span.disclaimer {\n      display: block;\n      font-size: 0.8rem;\n      font-weight: 400;\n      margin-top: 10px;\n    }\n  }\n\n  div.select-menu {\n    position: relative;\n    padding: 1rem;\n  }\n"]);
                return T = function() {
                    return e
                }, e
            }
            var q = Object(V.a)((function(e) {
                    var n = e.className,
                        t = e.instrument,
                        a = e.children,
                        o = N.map((function(e, n) {
                            return {
                                value: e.id,
                                label: e.name
                            }
                        }));
                    return r.a.createElement("div", {
                        className: n
                    }, r.a.createElement("div", {
                        className: "instrument-selection"
                    }, r.a.createElement("div", {
                        className: "title"
                    }, r.a.createElement("h3", null, "2) Choose an instrument from the list and customize it's effects below.")), r.a.createElement("div", {
                        className: "select-menu"
                    }, r.a.createElement(z.a, {
                        onChange: t.onChange,
                        options: o,
                        placeholder: "poly",
                        defaultValue: "0"
                    }))), a)
                }))(T(), M.seablue),
                B = t(27),
                R = t(24);

            function $() {
                var e = Object(D.a)(["\n  position: relative;\n\n  .control-selection {\n    background: #006992;\n    padding: 0 1rem 1rem;\n    margin-top: -1rem;\n  }\n  \n  p.show-controls {\n    width 95%;\n    margin: 0 auto;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    padding: 1rem 0;\n    svg {margin-left: 10px;}\n  }\n\n  .control-grid {\n    display: none;\n    &.open {\n      display: flex;\n    }\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n  \n  div.control-block {\n    flex: 1 0 auto;\n    margin: 0.5rem 5px;\n    padding: 1rem;\n    background: ", ";\n    border-radius: 10px;\n    box-shadow: 4px 8px 6px rgba(0,0,0,0.6);\n    width: 42.5%;\n    h3 {\n      font-size: 1rem;\n      text-align: center;\n      color: white;\n      margin: 0 auto;\n      text-transform: uppercase;\n    }\n  }\n  \n  .controls {\n    display: flex;\n    justify-content: center;\n    // align-items: center;\n    width: 95%;\n    flex-flow: column;\n    margin: 1rem auto 0;\n    > div {\n      display: flex;\n      margin: 0 auto 1rem;\n      padding: 1rem;\n      width: 95%;\n    }\n    button {\n      flex: 1 0 auto;\n      -webkit-appearance: none;\n      padding: 0.5rem 1rem;\n      margin: 5px auto;\n      width: 100%;\n      max-width: 125px;\n      font-size: 0.9rem;\n      font-weight: 700;\n      color: white;\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      background: ", ";\n      &:hover {\n        background: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n"]);
                return $ = function() {
                    return e
                }, e
            }
            var L = Object(V.a)((function(e) {
                    var n = e.className,
                        t = e.customInstrument,
                        o = e.children,
                        i = Object(a.useState)(!0),
                        c = Object(l.a)(i, 2),
                        s = c[0],
                        u = c[1],
                        m = Object(a.useState)(null),
                        d = Object(l.a)(m, 2),
                        p = d[0],
                        f = d[1],
                        g = Object(a.useState)(!0),
                        h = Object(l.a)(g, 2),
                        v = h[0],
                        b = h[1];
                    Object(a.useEffect)((function() {
                        console.info(t), f(w()), b(!1)
                    }), [t]);
                    var y = ["oscillator", "envelope", "attack", "release", "sustain", "decay", "attackNoise", "dampening", "resonance", "filter", "Q", "type", "rolloff", "filterEnvelope", "baseFrequency", "octaves", "exponent", "harmonicity", "modulationIndex", "modulation", "modulationEnvelope", "partials"],
                        x = !!t.voices,
                        w = function() {
                            return console.info("Compoze Controls called"), x ? A(O, j, C)(t.voices[0]) : A(O, j, C)(t)
                        },
                        k = function(e, n) {
                            if (t[e] && (t[e].type = n), t.voices)
                                for (var a = 0; a < t.voices.length; a++) {
                                    t.voices[a][e].type = n
                                }
                        },
                        E = function(e, n, a, r) {
                            if (n[a] = parseFloat(r), t.voices)
                                for (var o = 0; o < t.voices.length; o++) {
                                    t.voices[o][e][a] = parseFloat(r)
                                } else if (t[e]) {
                                    var i = t[e],
                                        l = i[a];
                                    l ? l.value ? l.value = parseFloat(r) : i[a] = parseFloat(r) : t[e] = n
                                }
                        },
                        O = function(e) {
                            var n = [];
                            return e.map((function(e, t) {
                                if (e.properties) {
                                    var a = [];
                                    e.properties.map((function(n) {
                                        a.push(r.a.createElement(ne, {
                                            className: "effect-slider",
                                            label: n.name,
                                            initialValue: n.initialValue,
                                            step: n.step,
                                            minValue: n.minValue,
                                            maxValue: n.maxValue,
                                            key: e.name + n.name + t,
                                            handleChange: n.handleChange
                                        }))
                                    })), n.push({
                                        component: a,
                                        name: e.name
                                    })
                                } else e.type ? n.push({
                                    component: r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "sine")
                                        }
                                    }, "Sine"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "amsine")
                                        }
                                    }, "AM Sine"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fmsine")
                                        }
                                    }, "FM Sine"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fatsine")
                                        }
                                    }, "Fat Sine"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "triangle")
                                        }
                                    }, "Triangle"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "amtriangle")
                                        }
                                    }, "AM Triangle"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fmtriangle")
                                        }
                                    }, "FM Triangle"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fattriangle")
                                        }
                                    }, "Fat Triangle"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "square50")
                                        }
                                    }, "Square"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "amsquare")
                                        }
                                    }, "AM Square"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fmsquare")
                                        }
                                    }, "FM Square"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fatsquare")
                                        }
                                    }, "Fat Square"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "sawtooth")
                                        }
                                    }, "Sawtooth"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "amsawtooth")
                                        }
                                    }, "AM Sawtooth"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fmsawtooth")
                                        }
                                    }, "FM Sawtooth"), r.a.createElement("button", {
                                        onClick: function() {
                                            return k(e.name, "fatsawtooth")
                                        }
                                    }, "Fat Sawtooth")),
                                    name: e.name
                                }) : n.push({
                                    component: r.a.createElement(ne, {
                                        className: "effect-slider",
                                        label: e.name,
                                        initialValue: e.initialValue,
                                        step: e.step,
                                        minValue: e.minValue,
                                        maxValue: e.maxValue,
                                        key: e.name,
                                        handleChange: e.handleChange
                                    }),
                                    name: e.name
                                })
                            })), r.a.createElement(r.a.Fragment, null, n.map((function(e) {
                                return r.a.createElement("div", {
                                    className: "control-block",
                                    key: "".concat(e.name, "input")
                                }, r.a.createElement("h3", null, e.name.toUpperCase()), r.a.createElement("div", {
                                    className: "controls"
                                }, e.component))
                            })))
                        },
                        j = function(e) {
                            var n = [];
                            return e.effects.map((function(a) {
                                var r = {
                                        name: a.name ? a.name : a
                                    },
                                    o = "object" === typeof a,
                                    i = !!a.value,
                                    l = !!a.type;
                                if (l) r.type = a.type;
                                else if (o)
                                    if (i) r.initialValue = a.value, r.minValue = a.minValue, r.maxValue = a.maxValue > 3e3 ? 5e3 : a.maxValue, r.step = a.maxValue > 3e3 ? 1 : .1, r.handleChange = function(e) {
                                        return E(a.name, a, "value", e)
                                    };
                                    else {
                                        var c = [];
                                        Object.keys(a).map((function(e) {
                                            if (y.includes(e)) {
                                                var n = {
                                                    name: e
                                                };
                                                n.initialValue = a[e], n.minValue = .1, n.maxValue = a[e] > 3e3 ? 5e3 : 3, n.step = a[e] > 3e3 ? 1 : .1, n.handleChange = function(n) {
                                                    return E(a.name, a, e, n)
                                                }, c.push(n)
                                            }
                                        })), r.properties = c
                                    }
                                else {
                                    var s = e.instrument;
                                    r.initialValue = s[a], r.minValue = .1, r.maxValue = s[a] + 10, r.step = .1, r.handleChange = function(e) {
                                        t[a] = e
                                    }
                                }
                                n.push(r)
                            })), n
                        },
                        C = function(e) {
                            var n = [];
                            return Object.keys(e).map((function(t) {
                                y.includes(t) && ("object" === typeof e[t] ? (e[t].name = t, n.push(e[t])) : n.push(t))
                            })), {
                                effects: n,
                                instrument: e
                            }
                        };
                    return r.a.createElement("div", {
                        className: n
                    }, r.a.createElement("div", {
                        className: "control-selection"
                    }, r.a.createElement("p", {
                        className: "show-controls",
                        onClick: function() {
                            return u(!s)
                        }
                    }, s ? "Hide" : "Show", " Instrument Controls", r.a.createElement(R.a, {
                        icon: B.a,
                        rotation: s ? 180 : null
                    })), r.a.createElement("div", {
                        className: s ? "control-grid open" : "control-grid"
                    }, !v && p, o)))
                }))($(), M.orange, M.seablue, M.oxford),
                W = t(2),
                _ = t(3),
                H = t(5),
                U = t(4),
                J = t(6),
                Q = function(e) {
                    function n(e) {
                        var t;
                        return Object(W.a)(this, n), (t = Object(H.a)(this, Object(U.a)(n).call(this, e))).startDrag = function(e) {
                            e.preventDefault();
                            var n = e.target.getBoundingClientRect(),
                                a = {
                                    x: n.left + n.width / 2,
                                    y: n.top + n.height / 2
                                },
                                r = function(e) {
                                    t.currentDeg = t.getDeg(e.clientX, e.clientY, a), t.currentDeg === t.startAngle && t.currentDeg--;
                                    var n = t.convertRange(t.startAngle, t.endAngle, t.props.min, t.props.max, t.currentDeg);
                                    t.setState({
                                        deg: t.currentDeg
                                    }), t.props.onChange(n)
                                };
                            document.addEventListener("mousemove", r), document.addEventListener("mouseup", (function(e) {
                                document.removeEventListener("mousemove", r)
                            }))
                        }, t.getDeg = function(e, n, a) {
                            var r = e - a.x,
                                o = n - a.y,
                                i = 180 * Math.atan(o / r) / Math.PI;
                            return i += r < 0 && o >= 0 || r < 0 && o < 0 ? 90 : 270, Math.min(Math.max(t.startAngle, i), t.endAngle)
                        }, t.convertRange = function(e, n, t, a, r) {
                            return (r - e) * (a - t) / (n - e) + t
                        }, t.renderTicks = function() {
                            for (var e = [], n = t.fullAngle / t.props.numTicks, a = t.margin + t.props.size / 2, r = t.startAngle; r <= t.endAngle; r += n) {
                                var o = {
                                    deg: r,
                                    tickStyle: {
                                        height: a + 10,
                                        left: a - 1,
                                        top: a + 2,
                                        transform: "rotate(".concat(r, "deg)"),
                                        transformOrigin: "top"
                                    }
                                };
                                e.push(o)
                            }
                            return e
                        }, t.dcpy = function(e) {
                            return JSON.parse(JSON.stringify(e))
                        }, t.fullAngle = e.degrees, t.startAngle = (360 - e.degrees) / 2, t.endAngle = t.startAngle + e.degrees, t.margin = .15 * e.size, t.currentDeg = Math.floor(t.convertRange(e.min, e.max, t.startAngle, t.endAngle, e.value)), t.state = {
                            deg: t.currentDeg
                        }, t
                    }
                    return Object(J.a)(n, e), Object(_.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                n = {
                                    width: this.props.size,
                                    height: this.props.size
                                },
                                t = this.dcpy(n),
                                a = this.dcpy(n),
                                o = this.dcpy(n);
                            return a.margin = this.margin, this.props.color && (a.backgroundImage = "radial-gradient(100% 70%,hsl(210, ".concat(this.currentDeg, "%, ").concat(this.currentDeg / 5, "%),hsl(").concat(100 * Math.random(), ",20%,").concat(this.currentDeg / 36, "%))")), t.transform = "rotate(".concat(this.state.deg, "deg)"), o.transform = "rotate(".concat(-this.state.deg, "deg)"), r.a.createElement("div", {
                                className: "knob",
                                style: n
                            }, r.a.createElement("div", {
                                className: "ticks"
                            }, this.props.numTicks && this.renderTicks().map((function(n, t) {
                                return r.a.createElement("div", {
                                    key: t,
                                    className: "tick".concat(n.deg <= e.currentDeg ? " active" : ""),
                                    style: n.tickStyle
                                })
                            }))), r.a.createElement("div", {
                                className: "knob outer",
                                style: a,
                                onMouseDown: this.startDrag,
                                onTouchStart: this.startDrag
                            }, r.a.createElement("div", {
                                className: "knob inner",
                                style: t
                            }, r.a.createElement("div", {
                                className: "grip"
                            }), r.a.createElement("p", {
                                id: "knob-value-display",
                                style: o
                            }, this.convertRange(this.startAngle, this.endAngle, this.props.min, this.props.max, this.currentDeg).toFixed(1)))))
                        }
                    }]), n
                }(a.Component),
                G = t(10),
                X = t(40),
                Y = [M.oxford, M.orange, M.white, M.lemonade, M.kermit],
                K = function(e, n, t, a) {
                    for (var r = t + t * (.2 * G.f.cycle(e % 3e3 / 3e3)), o = a.clone(), i = 0, l = o.length; i < l; i++) {
                        var c = a[i].$subtract(n.pointer);
                        c.magnitudeSq() < r * r ? o[i].to(n.pointer.$add(c.unit().$multiply(r))) : a[i].equals(o[i], .1) || o[i].to(G.d.interpolate(o[i], a[i], .02))
                    }
                    return o.push(o.p1, o.p2, o.p3), o
                },
                Z = function(e) {
                    function n(e) {
                        var t;
                        return Object(W.a)(this, n), (t = Object(H.a)(this, Object(U.a)(n).call(this, e))).pts = null, t.colorShades = [M.oxford, M.orange, M.white, M.lemonade, M.kermit], t.sound = G.g.from(m.a.Master, m.a.Master.context, "input").analyze(256), t
                    }
                    return Object(J.a)(n, e), Object(_.a)(n, [{
                        key: "createCanvas",
                        value: function() {
                            this.pts = G.b.distributeRandom(this.space.innerBound, 200)
                        }
                    }, {
                        key: "start",
                        value: function(e, n) {
                            this.createCanvas()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.createCanvas()
                        }
                    }, {
                        key: "animate",
                        value: function(e, n) {
                            var t = this.space,
                                a = this.form,
                                r = this.pts,
                                o = (this.colorShades, this.sound),
                                i = this.props,
                                l = i.isPlaying,
                                c = i.controlsOpen;
                            i.isMobile;
                            ! function(e, n, t, a) {
                                for (var r = 0, o = a.length; r < o; r++) t.fillOnly(M.oxford).point(a[r], 2, "circle")
                            }(0, 0, a, r), l ? function(e, n, t, a, r, o) {
                                var i = n.size.minValue().value / 3.5,
                                    l = G.b.radialPts(n.center, i, 10, -G.a.pi - G.a.quarter_pi),
                                    c = K(a, n, i, l),
                                    s = G.c.bspline(c, 4);
                                r ? (i = n.size.minValue().value / 4.5, l = G.b.radialPts(n.center.$add({
                                    x: 100
                                }), i, 10, -G.a.pi - G.a.quarter_pi), c = K(a, n, i, l), s = G.c.bspline(c, 4), t.fillOnly(M.seablue).polygon(s)) : t.fillOnly(M.seablue).polygon(s);
                                for (var u = [], m = 0; m < 256; m++) u.push(s.interpolate(m / 256));
                                for (var d, p = e.freqDomainTo([256, 1]), f = [], g = 0, h = 0, v = 0, b = p.length; v < b; v++) {
                                    var y = u[0 === v ? u.length - 1 : v - 1],
                                        x = u[v].$subtract(y);
                                    if (h += p[v].y, !(x.magnitudeSq() < 2)) {
                                        if (0 === g) d = [u[v]];
                                        else if (1 === g) {
                                            var w = G.d.perpendicular(x);
                                            d.push(u[v].$add(w[1].$unit().multiply(p[v].y * i)))
                                        } else 2 === g && (d.push(u[v]), f.push(d));
                                        g = (v + 1) % 3
                                    }
                                }
                                for (var k = h / 256, E = 0, O = f.length; E < O; E++) t.fillOnly(M.seablue).polygon(f[E]), t.fillOnly(Y[E % Y.length]).point(f[E][1], 10 * p[E].y, "circle");
                                var j = n.center.x - i / 2;
                                r && (j = n.center.$add({
                                    x: 100
                                }).x - i / 2);
                                for (var C = e.timeDomainTo([i, 12], [j, 0]).map((function(e, t) {
                                        return new G.e([e.x, n.center.y + 50 - e.y * G.f.cycle(t / 256) * (.5 + 1.5 * k)], [e.x, n.center.y + 50 + e.y * G.f.cycle(t / 256) * (.5 + 10 * k) + 10])
                                    })), S = 0, N = C.length; S < N; S++) {
                                    var A = [C[S].interpolate(.2 * k - 1.5), C[S].interpolate(1.5 + .3 * k)];
                                    t.strokeOnly(M.recordRed).line(C[S]), t.strokeOnly(M.black, 3).line(A)
                                }
                                var D = n.center;
                                r && (D = n.center.$add({
                                    x: 100
                                }));
                                var F = D.clone().toAngle(-G.a.quarter_pi - .2, i / 2, !0),
                                    V = D.clone().toAngle(-G.a.quarter_pi - 1.4, i / 2, !0);
                                t.fillOnly("#fff").ellipse(V, [18 + 15 * k, 18 + 15 * k], 0 - .25 * k), t.fillOnly("#fff").ellipse(F, [18 + 15 * k, 18 + 15 * k], 0 + .25 * k);
                                var z = F.clone().toAngle(F.$subtract(n.pointer).angle(), -5, !0),
                                    P = V.clone().toAngle(V.$subtract(n.pointer).angle(), -5, !0);
                                t.fill(M.black).points([P, z], 15 + 10 * k, "circle")
                            }(o, t, a, e, c) : function(e, n, t, a, r, o) {
                                var i = n.size.minValue().value / 3.5,
                                    l = G.b.radialPts(n.center, i, 10, -G.a.pi - G.a.quarter_pi),
                                    c = K(a, n, i, l),
                                    s = G.c.bspline(c, 4);
                                r ? (i = n.size.minValue().value / 4.5, l = G.b.radialPts(n.center.$add({
                                    x: 100
                                }), i, 10, -G.a.pi - G.a.quarter_pi), c = K(a, n, i, l), s = G.c.bspline(c, 4), t.fillOnly(M.seablue).polygon(s)) : t.fillOnly(M.seablue).polygon(s)
                            }(0, t, a, e, c)
                        }
                    }]), n
                }(X.a);

            function ee() {
                var e = Object(D.a)(["\n  flex: 1 0 100px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 5px 10px;\n  p.effect-label {\n    text-align: center;\n    color: white;\n    margin: 0 0 0;\n    z-index: 1;\n    top: 1.25rem;\n    position: relative;\n  }\n\n  .knob {\n    display: flex;\n    justify-content: center;\n    position: relative;\n  }\n  .knob .ticks {\n    position: absolute;\n    top: -2px;\n    left: -9px;\n  }\n  .knob .ticks .tick {\n    position: absolute;\n    background: black;\n    box-shadow: inset 0 0 0 0 black;\n    width: 3px;\n    transition: box-shadow 0.5s;\n  }\n  .knob .ticks .tick.active {\n    box-shadow: inset 0 0 5px 2px #509eec, 0 0 0 1px #369;\n  }\n  .knob.outer {\n    border-radius: 50%;\n    border: 1px solid #222;\n    border-bottom: 5px solid #222;\n    background-image: linear-gradient(125deg, ", " 0%, ", " 100%);\n    box-shadow: 0 5px 15px 2px black, 0 0 5px 3px black, 0 0 0 12px #444;\n  }\n  .knob.inner {\n    border-radius: 50%;\n  }\n  .knob.inner .grip {\n    position: absolute;\n    width: 5%;\n    height: 5%;\n    bottom: 2%;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background: #509eec;\n    box-shadow: 0 0 3px 1px black;\n    display: flex;\n    justify-content: center;\n  }\n  p#knob-value-display {\n    position: absolute;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 2px;\n    color: white;\n  }\n"]);
                return ee = function() {
                    return e
                }, e
            }
            var ne = Object(V.a)((function(e) {
                    var n = e.className,
                        t = e.initialValue,
                        o = e.minValue,
                        i = e.maxValue,
                        c = e.label,
                        s = e.handleChange,
                        u = Object(a.useState)(t),
                        m = Object(l.a)(u, 2),
                        d = m[0],
                        p = m[1];
                    return r.a.createElement("div", {
                        className: n
                    }, r.a.createElement(Q, {
                        size: 60,
                        numTicks: 20,
                        degrees: 260,
                        min: o,
                        max: i,
                        value: d,
                        color: !0,
                        onChange: function(e) {
                            return function(e) {
                                p(e), s(e.toFixed(1))
                            }(e)
                        }
                    }), r.a.createElement("p", {
                        className: "effect-label"
                    }, c))
                }))(ee(), M.boulder, M.battleship),
                te = new u.FeedbackDelay,
                ae = new u.Freeverb,
                re = new u.Phaser,
                oe = new u.Chorus,
                ie = new u.Distortion,
                le = new u.BitCrusher,
                ce = new u.AutoFilter,
                se = new u.PingPongDelay,
                ue = new u.PitchShift;
            te.wet.value = .5, te.id = 0, te.name = "FeedbackDelay", ae.wet.value = 1, ae.id = 1, ae.name = "Freeverb", re.wet.value = 1, re.id = 2, re.name = "Phaser", oe.wet.value = 1, oe.id = 3, oe.name = "chorus", ie.wet.value = 1, ie.id = 4, ie.name = "distortion", le.wet.value = 1, le.id = 5, le.name = "bitcrusher", ce.wet.value = 1, ce.id = 6, ce.name = "autofilter", se.wet.value = .5, se.id = 7, se.name = "PingPongDelay", ue.wet.value = .5, ue.id = 8, ue.name = "PitchShift", ue.pitch = 3;
            var me = [te, ae, re, oe, ie, le, ce, se, ue];

            function de() {
                var e = Object(D.a)(["\n  position: relative;\n\n  div.plugin-selection {\n    background: ", ";\n    padding: 1rem 0.5rem;\n    display: flex;\n    flex-flow: column;\n  }\n\n  div.title {\n    padding: 0.5rem;\n    text-align: center;\n    color: white;\n    h3 {\n      font-size: 1rem;\n      margin: 0;\n    }\n    span.disclaimer {\n      display: block;\n      font-size: 0.8rem;\n      font-weight: 400;\n      margin-top: 10px;\n    }\n  }\n\n  div.select-menu {\n    position: relative;\n    padding: 1rem;\n    flex: 1 0 auto;\n    button {\n      -webkit-appearance: none;\n      padding: 0.5rem 1rem;\n      margin: 0.5rem auto;\n      width: 100%;\n      font-size: 1rem;\n      font-weight: 700;\n      color: white;\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      background: ", ";\n      &:hover {\n        background: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n  \n  .control-selection {\n    background: ", ";\n    padding: 0 1rem 1rem;\n    margin-top: -1rem;\n  }\n  \n  p.show-controls {\n    width 95%;\n    margin: 0 auto;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    padding: 1rem 0;\n    svg {margin-left: 10px;}\n  }\n\n  .control-grid {\n    display: none;\n    &.open {\n      display: flex;\n      color: white;\n    }\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n  \n  div.control-block {\n    flex: 1 0 auto;\n    margin: 0.5rem 5px;\n    padding: 1rem;\n    background: ", ";\n    border-radius: 10px;\n    box-shadow: 4px 8px 6px rgba(0,0,0,0.6);\n    width: 42.5%;\n    h3 {\n      font-size: 1rem;\n      text-align: center;\n      color: white;\n      margin: 0 auto;\n      text-transform: uppercase;\n    }\n    button.remove-effect-button {\n      flex: 1 0 auto;\n      -webkit-appearance: none;\n      padding: 0.5rem 1rem;\n      margin: 5px auto;\n      width: 100%;\n      font-size: 0.9rem;\n      font-weight: 700;\n      color: white;\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      background: ", ";\n      &:hover {\n        background: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n  \n  .controls {\n    display: flex;\n    justify-content: center;\n    // align-items: center;\n    width: 95%;\n    flex-flow: column;\n    margin: 1rem auto 0;\n    > div {\n      display: flex;\n      margin: 0 auto 1rem;\n      padding: 1rem;\n      width: 95%;\n    }\n    button {\n      flex: 1 0 auto;\n      -webkit-appearance: none;\n      padding: 0.5rem 1rem;\n      margin: 5px auto;\n      width: 100%;\n      max-width: 125px;\n      font-size: 0.9rem;\n      font-weight: 700;\n      color: white;\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      background: ", ";\n      &:hover {\n        background: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n"]);
                return de = function() {
                    return e
                }, e
            }
            var pe = Object(V.a)((function(e) {
                var n = e.className,
                    t = e.customInstrument,
                    o = e.children,
                    i = Object(a.useState)(!1),
                    c = Object(l.a)(i, 2),
                    u = c[0],
                    m = c[1],
                    d = ["oscillator", "envelope", "curve", "attack", "release", "sustain", "decay", "attackNoise", "dampening", "resonance", "filter", "Q", "type", "rolloff", "filterEnvelope", "baseFrequency", "octaves", "exponent", "harmoncity", "modulationIndex", "modulation", "modulationEnvelope", "roomSize", "wet", "feedback", "delayTime"],
                    p = Object(a.useState)(0),
                    f = Object(l.a)(p, 2),
                    g = f[0],
                    h = f[1],
                    v = function(e) {
                        var n = Object(a.useState)(e),
                            t = Object(l.a)(n, 2),
                            r = t[0],
                            o = t[1];
                        return {
                            value: r,
                            setValue: o,
                            add: Object(a.useCallback)((function(e) {
                                return o((function(n) {
                                    return [].concat(Object(s.a)(n), [e])
                                }))
                            }), []),
                            clear: Object(a.useCallback)((function() {
                                return o((function() {
                                    return []
                                }))
                            }), []),
                            removeById: Object(a.useCallback)((function(e) {
                                return o((function(n) {
                                    return n.filter((function(n) {
                                        return n && n.id !== e
                                    }))
                                }))
                            }), []),
                            removeIndex: Object(a.useCallback)((function(e) {
                                return o((function(n) {
                                    return n.splice(e, 1), n
                                }))
                            }), [])
                        }
                    }([]),
                    b = me.map((function(e, n) {
                        return {
                            value: e.id,
                            label: e.name
                        }
                    })),
                    y = v.value;
                if (null !== y && y.length > 0)
                    for (var x = 0; x < y.length; x++) y[x] && t.chain(y[x].toMaster());
                var w = {},
                    k = [];
                y.map((function(e) {
                    var n = e.name;
                    k.push(n), w[n] = e
                }));
                return r.a.createElement("div", {
                    className: n
                }, r.a.createElement("div", {
                    className: "plugin-selection"
                }, r.a.createElement("div", {
                    className: "title"
                }, r.a.createElement("h3", null, "Chain some plugins from the list and customize their effects below.")), r.a.createElement("div", {
                    className: "select-menu"
                }, r.a.createElement(z.a, {
                    onChange: function(e) {
                        return h(parseInt(e.value))
                    },
                    placeholder: "FeedbackDelay",
                    options: b
                }), r.a.createElement("button", {
                    onClick: function() {
                        return v.add(me[g]), void m(!0)
                    }
                }, "Add Effect"))), r.a.createElement("div", {
                    className: "control-selection"
                }, r.a.createElement("p", {
                    className: "show-controls",
                    onClick: function() {
                        return m(!u)
                    }
                }, u ? "Hide" : "Show", " Plugin Controls", r.a.createElement(R.a, {
                    icon: B.a,
                    rotation: u ? 180 : null
                })), r.a.createElement("div", {
                    className: u ? "control-grid open" : "control-grid"
                }, y.length > 0 ? k.map((function(e) {
                    return r.a.createElement("div", {
                        className: "control-block",
                        key: "".concat(e, "block")
                    }, r.a.createElement("h3", null, e.toUpperCase()), r.a.createElement("div", {
                        className: "controls"
                    }, Object.keys(w[e]).map((function(n) {
                        if (d.includes(n)) {
                            var t = w[e][n],
                                a = !!t.value,
                                o = 3,
                                i = .1;
                            return a && (i = t.minValue, o = t.maxValue > 3e3 ? 5e3 : t.maxValue), r.a.createElement(ne, {
                                label: n,
                                initialValue: a ? t.value : t,
                                step: o > 3e3 ? 1 : .1,
                                minValue: i,
                                maxValue: o,
                                key: n,
                                handleChange: function(t) {
                                    return function(e, n, t) {
                                        var a = w[e][n];
                                        a && (a.value = parseFloat(t))
                                    }(e, n, t)
                                }
                            })
                        }
                    }))), r.a.createElement("button", {
                        className: "remove-effect-button",
                        onClick: function() {
                            return (n = w[e]).disconnect(), void v.removeById(n.id);
                            var n
                        }
                    }, "Remove"))
                })) : r.a.createElement("p", null, "Add some effects to get started!"), o)))
            }))(de(), M.koamaru, M.kermit, M.orange, M.koamaru, M.orange, M.seablue, M.oxford, M.seablue, M.oxford);

            function fe() {
                var e = Object(D.a)(["\n  position: relative;\n"]);
                return fe = function() {
                    return e
                }, e
            }
            var ge = Object(V.a)((function(e) {
                    var n = e.className,
                        t = e.customInstrument,
                        o = e.isPlaying,
                        i = e.controlsOpen,
                        c = e.isMobile,
                        s = Object(a.useState)(null),
                        u = Object(l.a)(s, 2),
                        m = u[0],
                        d = u[1];
                    return Object(a.useEffect)((function() {
                        d(r.a.createElement(Z, {
                            background: M.fog,
                            customInstrument: t,
                            style: {
                                height: c ? "50vh" : "100vh"
                            },
                            isPlaying: o,
                            controlsOpen: i,
                            isMobile: c
                        }))
                    }), [c, o, i]), r.a.createElement("div", {
                        className: n
                    }, m)
                }))(fe()),
                he = t(42);

            function ve() {
                var e = Object(D.a)(["\n  .start-screen {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    background: rgba(0, 105, 146, 0.9);\n    z-index: 100;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    h2 {\n      color: ", ";\n      font-size: 3rem;\n      font-weight: 700;\n      margin: 0 0 2rem;\n      text-align: center;\n    }\n    p.intro {\n      color: ", ";\n      font-size: 1.2rem;\n      text-align: center;\n      max-width: 600px;\n    }\n    a.shameless-plug {\n      position: absolute;\n      bottom: 3rem;\n      color: white;\n      text-decoration: none;\n      display: flex;\n      align-items: center;\n      transition: all 250ms;\n      span {\n        margin-right: 5px;\n      }\n      svg {\n        font-size: 2rem;\n      }\n      &:hover {\n        color: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n\n  .start-context {\n    max-width: 500px;\n    width: 100%;\n    margin-top: 1rem;\n    p.warning {\n      color: ", ";\n      font-size: 1.1rem;\n      text-align: center;\n      margin: 2rem 0;\n      max-width: 500px;\n      padding: 1rem;\n    }\n    button {\n      -webkit-appearance: none;\n      padding: 0.75rem 1rem;\n      font-size: 1.2rem;\n      width: 100%;\n      display: block;\n      margin: 0 auto;\n      max-width: 300px;\n      font-weight: 400;\n      color: ", ";\n      transition: all 250ms;\n      cursor: pointer;\n      border: none;\n      border-radius: 6px;\n      background: ", ";\n      &:hover {\n        background: ", ";\n        color: ", ";\n        transition: all 250ms;\n      }\n    }\n  }\n"]);
                return ve = function() {
                    return e
                }, e
            }
            var be = Object(V.a)((function(e) {
                var n = e.className,
                    t = e.customInstrument,
                    a = Object(c.b)(!1, !0),
                    o = Object(l.a)(a, 2),
                    i = o[0],
                    s = o[1],
                    u = {
                        open: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            return {
                                clipPath: "circle(".concat(2 * e + 200, "px at 40px 40px)"),
                                transition: {
                                    type: "spring",
                                    stiffness: 20,
                                    restDelta: 2
                                }
                            }
                        },
                        closed: {
                            clipPath: "circle(0px at 40px 40px)",
                            transition: {
                                delay: 0,
                                type: "spring",
                                stiffness: 400,
                                damping: 40
                            }
                        }
                    };
                return r.a.createElement("div", {
                    className: n
                }, r.a.createElement(c.a.div, {
                    initial: !1,
                    animate: i ? "closed" : "open"
                }, r.a.createElement(c.a.div, {
                    className: "start-screen",
                    variants: u
                }, r.a.createElement("h2", null, "Welcome to the VICO Compozer"), r.a.createElement("div", {
                    className: "start-context"
                }, r.a.createElement("button", {
                    onClick: function() {
                        s(), t.voices[0].oscillator.type = "fatsawtooth51", m.a.Transport.start(0)
                    }
                }, "Get Started"), r.a.createElement("p", {
                    className: "warning"
                }, "Fair warning, you may want to start with your volume at 50%. Synthesizers with effects can get pretty loud. If you're on mobile, make sure your phone isn't muted.")), r.a.createElement("a", {
                    className: "shameless-plug",
                    href: "https://github.com/vicoagent"
                }, r.a.createElement("span", null, "Check it out on"), r.a.createElement(R.a, {
                    icon: he.a
                })))))
            }))(ve(), M.fog, M.fog, M.orange, M.lightyellow, M.boulder, M.fog, M.orange, M.white);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            t(65);
            i.a.render(r.a.createElement((function() {
                var e = function() {
                        var e = Object(a.useState)(window.innerWidth),
                            n = Object(l.a)(e, 2),
                            t = n[0],
                            r = n[1];
                        return Object(a.useEffect)((function() {
                            var e = function() {
                                return r(window.innerWidth)
                            };
                            return window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        })), t
                    }(),
                    n = function(e) {
                        var n = Object(a.useState)(e),
                            t = Object(l.a)(n, 2),
                            r = t[0],
                            o = t[1];
                        return {
                            value: r.id,
                            onChange: function(e) {
                                o(N[parseInt(e.value)])
                            }
                        }
                    }(N[0]),
                    t = N[n.value],
                    o = function(e) {
                        var n = Object(a.useState)(e),
                            t = Object(l.a)(n, 2),
                            r = t[0],
                            o = t[1];
                        return {
                            value: r,
                            setValue: function(e) {
                                return o(e)
                            }
                        }
                    }(!1),
                    i = Object(c.b)(!1, !0),
                    s = Object(l.a)(i, 2),
                    u = s[0],
                    m = s[1],
                    d = Object(a.useRef)(null),
                    p = function(e) {
                        var n = Object(a.useRef)({
                            width: 0,
                            height: 0
                        });
                        return Object(a.useEffect)((function() {
                            n.current.width = e.current.offsetWidth, n.current.height = e.current.offsetHeight
                        }), []), n.current
                    }(d).height,
                    f = {
                        open: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            return {
                                clipPath: "circle(".concat(2 * e + 200, "px at 40px 40px)"),
                                transition: {
                                    type: "spring",
                                    stiffness: 20,
                                    restDelta: 2
                                }
                            }
                        },
                        closed: {
                            clipPath: "circle(0px at 40px 40px)",
                            transition: {
                                delay: 0,
                                type: "spring",
                                stiffness: 400,
                                damping: 40
                            }
                        },
                        short: {
                            width: e <= 800 ? "100%" : "75%",
                            right: "0",
                            transition: {
                                delay: .1,
                                type: "spring",
                                stiffness: 1e3,
                                restDelta: 2,
                                damping: 50
                            }
                        },
                        big: {
                            width: "100%",
                            right: "0",
                            transition: {
                                delay: .1,
                                type: "spring",
                                stiffness: 1e3,
                                restDelta: 2,
                                damping: 40
                            }
                        }
                    };
                return r.a.createElement("div", {
                    className: "app"
                }, r.a.createElement(be, {
                    className: "intro-section",
                    customInstrument: t
                }), r.a.createElement(c.a.div, {
                    animate: u ? "short" : "big",
                    className: "animation"
                }, r.a.createElement(ge, {
                    className: "animation-container",
                    customInstrument: t,
                    isPlaying: o.value,
                    controlsOpen: u,
                    isMobile: e <= 800
                }), r.a.createElement(c.a.div, {
                    className: "show-controls",
                    variants: f
                }, r.a.createElement("button", {
                    className: "control-toggle",
                    onClick: m
                }, u ? "HIDE" : "SHOW", " CONTROLS"), r.a.createElement("button", {
                    className: "play-toggle",
                    onClick: function() {
                        return o.setValue(!o.value)
                    }
                }, o.value ? "STOP" : "PLAY MUSIC"))), r.a.createElement(c.a.div, {
                    initial: !1,
                    animate: u || e <= 800 ? "open" : "closed",
                    custom: p,
                    ref: d
                }, r.a.createElement(c.a.div, {
                    className: "controls-menu",
                    variants: f
                }, r.a.createElement(I, {
                    className: "song-container",
                    player: t,
                    musicStarted: o
                }, r.a.createElement(q, {
                    className: "instrument",
                    instrument: n
                }, r.a.createElement(L, {
                    className: "effect",
                    customInstrument: t
                })), r.a.createElement(pe, {
                    className: "plugins",
                    customInstrument: t
                })))))
            }), null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [43, 1, 2]
    ]
]);