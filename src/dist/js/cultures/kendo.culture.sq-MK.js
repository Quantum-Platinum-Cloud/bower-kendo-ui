/**
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function (factory) {
    typeof define === 'function' && define.amd ? define(['kendo.core'], factory) :
    factory();
})((function () {
    (function( window, undefined$1 ) {
        kendo.cultures["sq-MK"] = {
            name: "sq-MK",
            numberFormat: {
                pattern: ["-n"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                percent: {
                    pattern: ["-n%","n%"],
                    decimals: 2,
                    ",": " ",
                    ".": ",",
                    groupSize: [3],
                    symbol: "%"
                },
                currency: {
                    name: "Macedonian Denar",
                    abbr: "MKD",
                    pattern: ["-n $","n $"],
                    decimals: 2,
                    ",": " ",
                    ".": ",",
                    groupSize: [3],
                    symbol: "den"
                }
            },
            calendars: {
                standard: {
                    days: {
                        names: ["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],
                        namesAbbr: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
                        namesShort: ["die","hën","mar","mër","enj","pre","sht"]
                    },
                    months: {
                        names: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor"],
                        namesAbbr: ["jan","shk","mar","pri","maj","qer","korr","gush","sht","tet","nën","dhj"]
                    },
                    AM: ["p.d.","p.d.","P.D."],
                    PM: ["m.d.","m.d.","M.D."],
                    patterns: {
                        d: "d.M.yyyy",
                        D: "dddd, d MMMM yyyy",
                        F: "dddd, d MMMM yyyy HH:mm:ss",
                        g: "d.M.yyyy HH:mm",
                        G: "d.M.yyyy HH:mm:ss",
                        m: "d MMMM",
                        M: "d MMMM",
                        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                        t: "HH:mm",
                        T: "HH:mm:ss",
                        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                        y: "MMMM yyyy",
                        Y: "MMMM yyyy"
                    },
                    "/": ".",
                    ":": ":",
                    firstDay: 1
                }
            }
        };
    })();

}));