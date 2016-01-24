/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"Draggable.min.js",
            js+"jquery-1.10.2.min.js",
            js+"ThrowPropsPlugin.min.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back_insde',
                            type: 'image',
                            rect: ['0', '0', '1280px', '768', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Back_inside.jpg",'0px','0px']
                        },
                        {
                            id: 'pageContainer',
                            type: 'rect',
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: ""
                        },
                        {
                            id: 'nextBtn',
                            type: 'image',
                            rect: ['1183px', '20px', '77px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Next.png",'0px','0px']
                        },
                        {
                            id: 'prevBtn',
                            type: 'image',
                            rect: ['20px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Back.png",'0px','0px']
                        },
                        {
                            id: 'Home',
                            type: 'image',
                            rect: ['997px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Home.png",'0px','0px']
                        },
                        {
                            id: 'plyHome',
                            type: 'ellipse',
                            rect: ['1021px', '36px', '38px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 7, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['896px', '36px', 'auto', 'auto', 'auto', 'auto'],
                            text: "index",
                            font: ['Arial, Helvetica, sans-serif', [33, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'plyIndex',
                            type: 'ellipse',
                            rect: ['869px', '33px', '127px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 7, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Sections_Bar',
                            symbolName: 'Sections_Bar',
                            type: 'rect',
                            rect: ['43px', '668px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'index',
                            symbolName: 'index',
                            type: 'rect',
                            rect: ['0px', '0px', '367', '768', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280', '768', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Slide_00": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Back_inside_Cover',
                            opacity: '0.1869918699187',
                            rect: ['0', '0', '1280px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Back_inside_Cover.jpg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S0_slogan',
                            rect: ['984px', '467px', '296px', '160px', 'auto', 'auto'],
                            clip: 'rect(0px 296px 160px 305.359375px)',
                            fill: ['rgba(0,0,0,0)', 'images/S0_slogan.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-49'], [0, 0, 0], [1, 1, 1]],
                            rect: ['496px', '51px', '516px', '654px', 'auto', 'auto'],
                            id: 'S0_gun',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S0_gun.png', '0px', '0px']
                        },
                        {
                            id: 'S0_bullet032',
                            type: 'image',
                            rect: ['408px', '393px', '92px', '147px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_bullet03.png', '0px', '0px']
                        },
                        {
                            id: 'S0_bullet022',
                            type: 'image',
                            rect: ['440px', '362px', '159px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_bullet02.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['-360'], [0, 0, 0], [1, 1, 1]],
                            rect: ['349px', '310px', '159px', '83px', 'auto', 'auto'],
                            id: 'S0_bullet013',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S0_bullet01.png', '0px', '0px']
                        },
                        {
                            id: 'S0_01',
                            type: 'image',
                            rect: ['0px', '0px', '426px', '175px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S0_01.png', '-430.140625px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid545",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Back_inside_Cover}",
                            '0.1869918699187',
                            '1'
                        ],
                        [
                            "eid889",
                            "opacity",
                            2000,
                            1000,
                            "linear",
                            "${S0_bullet013}",
                            '0',
                            '1'
                        ],
                        [
                            "eid911",
                            "rotateZ",
                            7000,
                            1000,
                            "linear",
                            "${S0_bullet032}",
                            '-360deg',
                            '0deg'
                        ],
                        [
                            "eid912",
                            "opacity",
                            7000,
                            1000,
                            "linear",
                            "${S0_bullet032}",
                            '0',
                            '1'
                        ],
                        [
                            "eid910",
                            "opacity",
                            4500,
                            1000,
                            "linear",
                            "${S0_bullet022}",
                            '0',
                            '1'
                        ],
                        [
                            "eid880",
                            "clip",
                            1000,
                            750,
                            "linear",
                            "${S0_slogan}",
                            [0,296,160,305.359375],
                            [0,296,160,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid884",
                            "rotateZ",
                            1500,
                            250,
                            "linear",
                            "${S0_gun}",
                            '360deg',
                            '-49deg'
                        ],
                        [
                            "eid885",
                            "rotateZ",
                            1750,
                            500,
                            "linear",
                            "${S0_gun}",
                            '-49deg',
                            '0deg'
                        ],
                        [
                            "eid899",
                            "rotateZ",
                            4000,
                            250,
                            "linear",
                            "${S0_gun}",
                            '360deg',
                            '-49deg'
                        ],
                        [
                            "eid900",
                            "rotateZ",
                            4250,
                            500,
                            "linear",
                            "${S0_gun}",
                            '-49deg',
                            '0deg'
                        ],
                        [
                            "eid902",
                            "rotateZ",
                            6500,
                            250,
                            "linear",
                            "${S0_gun}",
                            '360deg',
                            '-49deg'
                        ],
                        [
                            "eid903",
                            "rotateZ",
                            6750,
                            500,
                            "linear",
                            "${S0_gun}",
                            '-49deg',
                            '0deg'
                        ],
                        [
                            "eid909",
                            "rotateZ",
                            4500,
                            1000,
                            "linear",
                            "${S0_bullet022}",
                            '-360deg',
                            '0deg'
                        ],
                        [
                            "eid878",
                            "background-position",
                            500,
                            750,
                            "linear",
                            "${S0_01}",
                            [-430.140625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid887",
                            "rotateZ",
                            2000,
                            1000,
                            "linear",
                            "${S0_bullet013}",
                            '-360deg',
                            '0deg'
                        ],
                        [
                            "eid882",
                            "opacity",
                            1500,
                            750,
                            "linear",
                            "${S0_gun}",
                            '0',
                            '1'
                        ],
                        [
                            "eid901",
                            "opacity",
                            4000,
                            750,
                            "linear",
                            "${S0_gun}",
                            '0',
                            '1'
                        ],
                        [
                            "eid904",
                            "opacity",
                            6500,
                            750,
                            "linear",
                            "${S0_gun}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'S1_09',
                            rect: ['351', '523', '568px', '110px', 'auto', 'auto'],
                            clip: 'rect(0px 568px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_09.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S1_03',
                            rect: ['336', '194', '607px', '320px', 'auto', 'auto'],
                            clip: 'rect(0px 607px -2.66650390625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S1_02',
                            rect: ['94', '147', '1091px', '34px', 'auto', 'auto'],
                            clip: 'rect(0px 1091px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S1_02.png', '0px', '0px']
                        },
                        {
                            id: 'S1_01',
                            type: 'image',
                            rect: ['148', '56', '103px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S1_01.png', '0px', '0px']
                        },
                        {
                            rect: ['296', '187', '623', '320', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G1',
                            symbolName: 'G1',
                            clip: 'rect(0px 623px 320px 0px)',
                            opacity: '0'
                        },
                        {
                            rect: ['997px', '194px', '76', '76', 'auto', 'auto'],
                            id: 'play_Zoom',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_out',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'Text',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            id: 'i',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'play_ref',
                            opacity: '1',
                            cursor: 'pointer',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            title: 'play_ref',
                            userClass: '',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'S1_re',
                            symbolName: 'S_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S1_Zoom',
                            symbolName: 'S1_Zoom',
                            display: 'none',
                            rect: ['0', '-1', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1049,
                    autoPlay: false,
                    data: [
                        [
                            "eid37",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${G1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid411",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S1_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${S1_03}",
                            [0,607,-2.66650390625,0],
                            [0,607,320,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid409",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S1_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "clip",
                            750,
                            299,
                            "linear",
                            "${S1_09}",
                            [0,568,-6,0],
                            [0,568,110,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid413",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_Zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S1_02}",
                            [0,1091,-5,0],
                            [0,1091,34,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S2_01',
                            type: 'image',
                            rect: ['135', '57', '217px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_02',
                            rect: ['98', '138', '1083px', '56px', 'auto', 'auto'],
                            clip: 'rect(0px 1083px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_03',
                            rect: ['372', '215', '571px', '233px', 'auto', 'auto'],
                            clip: 'rect(0px 571px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S2_06',
                            rect: ['374', '481', '599px', '154px', 'auto', 'auto'],
                            clip: 'rect(0px 599px -4.66650390625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2_06.png', '0px', '0px']
                        },
                        {
                            id: 'i',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '1',
                            id: 'play_ref',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['352', '208', '616', '255', 'auto', 'auto'],
                            id: 'G2',
                            symbolName: 'G2',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1003px', '220px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy2',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy2',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy2',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S2_re',
                            symbolName: 'S2_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S2_Zoom',
                            symbolName: 'S2_Zoom',
                            display: 'none',
                            rect: ['0', '-1', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1063,
                    autoPlay: false,
                    data: [
                        [
                            "eid415",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid420",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S2_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${S2_03}",
                            [0,571,-7,0],
                            [0,571,233,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid41",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S2_02}",
                            [0,1083,-4,0],
                            [0,1083,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid50",
                            "opacity",
                            448,
                            302,
                            "linear",
                            "${G2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "clip",
                            750,
                            313,
                            "linear",
                            "${S2_06}",
                            [0,599,-4.66650390625,0],
                            [0,599,154,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid555",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S2_re}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid556",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S2_re}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S3_01',
                            type: 'image',
                            rect: ['144', '58', '97px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S3_02',
                            rect: ['101', '145', '1077px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1077px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S3_03',
                            rect: ['399', '213', '481px', '259px', 'auto', 'auto'],
                            clip: 'rect(0px 481px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S3_062',
                            rect: ['335', '492', '649px', '151px', 'auto', 'auto'],
                            clip: 'rect(0px 649px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3_06.png', '0px', '0px']
                        },
                        {
                            rect: ['352', '199', '584', '278', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G3',
                            symbolName: 'G3',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'iCopy',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1077', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['972', '187', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy3',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy3',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S3_re',
                            symbolName: 'S3_re',
                            display: 'none',
                            rect: ['0', '1', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S3_Zoom',
                            symbolName: 'S3_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid520",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S3_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid58",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S3_062}",
                            [0,649,-5,0],
                            [0,649,151,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid421",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid448",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S3_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S3_03}",
                            [0,481,-7,0],
                            [0,481,259,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid65",
                            "opacity",
                            628,
                            372,
                            "linear",
                            "${G3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S3_02}",
                            [0,1077,-6,0],
                            [0,1077,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid447",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S3_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid446",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S3_Zoom}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'S4_06',
                            rect: ['276', '449', '696px', '192px', 'auto', 'auto'],
                            clip: 'rect(0px 696px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_03',
                            rect: ['403', '255', '475px', '187px', 'auto', 'auto'],
                            clip: 'rect(0px 475px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_02',
                            rect: ['97', '157', '1143px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 1143px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4_02.png', '0px', '0px']
                        },
                        {
                            id: 'S4_01',
                            type: 'image',
                            rect: ['156', '55', '546px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_01.png', '0px', '0px']
                        },
                        {
                            id: 'S4_08',
                            type: 'image',
                            rect: ['51', '676', '184px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4_08.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy2',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['348', '233', '546', '209', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G4',
                            symbolName: 'G4',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['942', '233', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy4',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy4',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy4',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S4_re',
                            symbolName: 'S4_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S4_Zoom',
                            symbolName: 'S4_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid76",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid422",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid451",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S4_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid452",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S4_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid453",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S4_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid521",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S4_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S4_02}",
                            [0,1143,-9,0],
                            [0,1143,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid69",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S4_03}",
                            [0,475,-5,0],
                            [0,475,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid78",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S4_06}",
                            [0,696,-4,0],
                            [0,696,192,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S5_01',
                            type: 'image',
                            rect: ['142', '56', '179px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S5_02',
                            rect: ['116', '142', '1061px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 1061px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S5_03',
                            rect: ['402', '226', '489px', '236px', 'auto', 'auto'],
                            clip: 'rect(0px 489px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S5_06',
                            rect: ['300', '477', '673px', '168px', 'auto', 'auto'],
                            clip: 'rect(0px 673px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy3',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['357', '229', '571', '236', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G5',
                            symbolName: 'G5',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['993px', '235px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy5',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy5',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy5',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S5_re',
                            symbolName: 'S5_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S5_Zoom',
                            symbolName: 'S5_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid94",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S5_06}",
                            [0,673,-8,0],
                            [0,673,168,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid92",
                            "opacity",
                            582,
                            418,
                            "linear",
                            "${G5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid456",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S5_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid455",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S5_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid423",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S5_03}",
                            [0,489,-4,0],
                            [0,489,236,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid522",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S5_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S5_02}",
                            [0,1061,-9,0],
                            [0,1061,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid454",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S5_Zoom}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S6_01',
                            type: 'image',
                            rect: ['158', '54', '180px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_02',
                            rect: ['114', '149', '1054px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1054px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_03',
                            rect: ['384', '219', '554px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 554px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_06',
                            rect: ['301', '468', '656px', '174px', 'auto', 'auto'],
                            clip: 'rect(0px 656px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy4',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['372', '203', '604', '246', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G6',
                            symbolName: 'G6',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['1017px', '203px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy6',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy6',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy6',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S6_re',
                            symbolName: 'S6_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S6_Zoom',
                            symbolName: 'S6_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid459",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S6_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid117",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S6_03}",
                            [0,554,-7,0],
                            [0,554,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid458",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S6_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid424",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid523",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S6_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S6_02}",
                            [0,1054,-8,0],
                            [0,1054,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid119",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S6_06}",
                            [0,656,-6,0],
                            [0,656,174,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid126",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid457",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S6_Zoom}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S7_01',
                            type: 'image',
                            rect: ['167', '58', '117px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S7_02',
                            rect: ['61', '145', '1091px', '33px', 'auto', 'auto'],
                            clip: 'rect(0px 1091px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S7_03',
                            rect: ['323', '186', '607px', '317px', 'auto', 'auto'],
                            clip: 'rect(0px 607px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S7_09',
                            rect: ['323', '512', '568px', '111px', 'auto', 'auto'],
                            clip: 'rect(0px 568px -3px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7_09.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy5',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['284', '186', '625', '302', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G7',
                            symbolName: 'G7',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['1014px', '191px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy7',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy7',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy7',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S7_re',
                            symbolName: 'S7_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S7_Zoom',
                            symbolName: 'S7_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid98",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S7_03}",
                            [0,607,-5,0],
                            [0,607,317,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid517",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S7_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid425",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid463",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S7_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid464",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S7_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid113",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S7_09}",
                            [0,568,-3,0],
                            [0,568,111,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid111",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S7_02}",
                            [0,1091,-5,0],
                            [0,1091,33,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid524",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S7_re}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_08": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S8_01',
                            type: 'image',
                            rect: ['154', '56', '147px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S8_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S8_02',
                            rect: ['105', '148', '1083px', '57px', 'auto', 'auto'],
                            clip: 'rect(0px 1083px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S8_03',
                            rect: ['354', '238', '571px', '226px', 'auto', 'auto'],
                            clip: 'rect(0px 571px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S8_06',
                            rect: ['321', '483', '602px', '159px', 'auto', 'auto'],
                            clip: 'rect(0px 602px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy6',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['320', '227', '605', '244', 'auto', 'auto'],
                            id: 'G8',
                            symbolName: 'G8',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1034px', '227px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy8',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy8',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy8',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S8_re',
                            symbolName: 'S8_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S8_Zoom',
                            symbolName: 'S8_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid141",
                            "opacity",
                            588,
                            412,
                            "linear",
                            "${G8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S8_03}",
                            [0,571,-8,0],
                            [0,571,226,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid460",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S8_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S8_02}",
                            [0,1083,-7,0],
                            [0,1083,57,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid525",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S8_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid462",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S8_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid461",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S8_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid426",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S8_06}",
                            [0,602,-9,0],
                            [0,602,159,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_09": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S9_01',
                            type: 'image',
                            rect: ['153', '56', '95px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S9_02',
                            rect: ['101', '155', '1077px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1077px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S9_03',
                            rect: ['399', '226', '481px', '259px', 'auto', 'auto'],
                            clip: 'rect(0px 481px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S9_06',
                            rect: ['245', '491', '737px', '155px', 'auto', 'auto'],
                            clip: 'rect(0px 737px -11px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy7',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '220', '522', '268', 'auto', 'auto'],
                            id: 'G9',
                            symbolName: 'G9',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1010px', '220px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy9',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy9',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy9',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S9_re',
                            symbolName: 'S9_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S9_Zoom',
                            symbolName: 'S9_Zoom',
                            display: 'none',
                            rect: ['0px', '0px', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid160",
                            "opacity",
                            869,
                            381,
                            "linear",
                            "${G9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid466",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S9_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid143",
                            "clip",
                            250,
                            311,
                            "linear",
                            "${S9_02}",
                            [0,1077,-6,0],
                            [0,1077,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid145",
                            "clip",
                            561,
                            689,
                            "linear",
                            "${S9_03}",
                            [0,481,-5,0],
                            [0,481,259,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid526",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S9_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid467",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S9_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid427",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid465",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S9_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid153",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S9_06}",
                            [0,737,-11,0],
                            [0,737,155,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S10_01',
                            type: 'image',
                            rect: ['153', '46', '473px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S10_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S10_02',
                            rect: ['69', '148', '1143px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 1143px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S10_03',
                            rect: ['454', '235', '476px', '187px', 'auto', 'auto'],
                            clip: 'rect(0px 476px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S10_06',
                            rect: ['281', '441', '692px', '192px', 'auto', 'auto'],
                            clip: 'rect(0px 692px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy8',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['339', '225', '609', '206', 'auto', 'auto'],
                            id: 'G10',
                            symbolName: 'G10',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1010px', '235px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy10',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy10',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy10',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S10_re',
                            symbolName: 'S10_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S10_Zoom',
                            symbolName: 'S10_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1090,
                    autoPlay: false,
                    data: [
                        [
                            "eid469",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S10_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid468",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S10_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid164",
                            "clip",
                            250,
                            557,
                            "linear",
                            "${S10_03}",
                            [0,476,-7,0],
                            [0,476,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid527",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S10_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "clip",
                            807,
                            283,
                            "linear",
                            "${S10_06}",
                            [0,692,-6,0],
                            [0,692,192,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid173",
                            "opacity",
                            500,
                            307,
                            "linear",
                            "${G10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S10_02}",
                            [0,1143,-5,0],
                            [0,1143,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid428",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid470",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S10_Zoom}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S11_01',
                            type: 'image',
                            rect: ['159', '53', '99px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S11_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_02',
                            rect: ['113', '134', '1055px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1055px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_03',
                            rect: ['401', '216', '553px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 553px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_06',
                            rect: ['303', '449', '657px', '174px', 'auto', 'auto'],
                            clip: 'rect(0px 657px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy9',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['395', '189', '579', '248', 'auto', 'auto'],
                            id: 'G11',
                            symbolName: 'G11',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1054px', '188px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy11',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy11',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy11',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S11_re',
                            symbolName: 'S11_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S11_Zoom',
                            symbolName: 'S11_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid179",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S11_06}",
                            [0,657,-10,0],
                            [0,657,174,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid186",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid471",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S11_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid429",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid473",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S11_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid472",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S11_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid528",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S11_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid175",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S11_02}",
                            [0,1055,-8,0],
                            [0,1055,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid177",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S11_03}",
                            [0,553,-5,0],
                            [0,553,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S12_01',
                            type: 'image',
                            rect: ['153', '68', '245px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S12_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S12_02',
                            rect: ['113', '149', '1054px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 1054px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S12_03',
                            rect: ['395', '233', '489px', '236px', 'auto', 'auto'],
                            clip: 'rect(0px 489px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S12_06',
                            rect: ['322', '487', '668px', '175px', 'auto', 'auto'],
                            clip: 'rect(0px 668px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy10',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['381', '233', '522', '236', 'auto', 'auto'],
                            id: 'G12',
                            symbolName: 'G12',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1034px', '233px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy12',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy12',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy12',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S12_re',
                            symbolName: 'S12_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S12_Zoom',
                            symbolName: 'S12_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid190",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S12_03}",
                            [0,489,-8,0],
                            [0,489,236,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid529",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S12_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid476",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S12_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid430",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid192",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S12_06}",
                            [0,668,-7,0],
                            [0,668,175,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid199",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S12_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid475",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S12_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid188",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S12_02}",
                            [0,1054,-9,0],
                            [0,1054,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S13_01',
                            type: 'image',
                            rect: ['144', '54', '339px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_02',
                            rect: ['138', '147', '1018px', '60px', 'auto', 'auto'],
                            clip: 'rect(0px 1018px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S13_03',
                            rect: ['385', '227', '523px', '294px', 'auto', 'auto'],
                            clip: 'rect(0px 523px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13_03.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy11',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['371', '227', '561', '309', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G13',
                            symbolName: 'G13',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['1064px', '227px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy13',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy13',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy13',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S13_re',
                            symbolName: 'S13_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S13_Zoom',
                            symbolName: 'S13_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid203",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S13_03}",
                            [0,523,-6,0],
                            [0,523,294,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid431",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S13_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid479",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S13_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid201",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S13_02}",
                            [0,1018,-8,0],
                            [0,1018,60,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid205",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid478",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S13_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid477",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S13_Zoom}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S14_01',
                            type: 'image',
                            rect: ['152', '59', '444px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S14_01.png', '0px', '0px']
                        },
                        {
                            rect: ['144', '168', '557px', '190px', 'auto', 'auto'],
                            id: 'S14_02',
                            type: 'image',
                            clip: 'rect(0px 557px -12px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14_02.png', '0px', '0px']
                        },
                        {
                            rect: ['774', '132', '341px', '283px', 'auto', 'auto'],
                            id: 'S14_03',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S14_03.png', '352.625px', '2.765625px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid918",
                            "background-position",
                            500,
                            750,
                            "linear",
                            "${S14_03}",
                            [352.625,2.765625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid212",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S14_02}",
                            [0,557,-12,0],
                            [0,557,190,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S15_01',
                            type: 'image',
                            rect: ['152', '58', '396px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S15_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S15_02',
                            rect: ['102', '143', '1077px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1077px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S15_03',
                            rect: ['407', '203', '487px', '262px', 'auto', 'auto'],
                            clip: 'rect(0px 487px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S15_06',
                            rect: ['327', '473', '650px', '172px', 'auto', 'auto'],
                            clip: 'rect(0px 650px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy12',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['396', '197', '508', '268', 'auto', 'auto'],
                            id: 'G15',
                            symbolName: 'G15',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1008px', '192px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy15',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy15',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy15',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S15_re',
                            symbolName: 'S15_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S15_Zoom',
                            symbolName: 'S15_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid229",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid220",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S15_03}",
                            [0,487,-10,0],
                            [0,487,262,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid433",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid531",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S15_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid222",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S15_06}",
                            [0,650,-8,0],
                            [0,650,172,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid482",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S15_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid480",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S15_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid481",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S15_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid218",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S15_02}",
                            [0,1077,-8,0],
                            [0,1077,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_16": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S16_01',
                            type: 'image',
                            rect: ['144', '55', '402px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S16_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S16_02',
                            rect: ['101', '145', '1091px', '33px', 'auto', 'auto'],
                            clip: 'rect(0px 1091px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S16_03',
                            rect: ['337', '195', '606px', '320px', 'auto', 'auto'],
                            clip: 'rect(0px 606px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S16_09',
                            rect: ['363', '531', '568px', '111px', 'auto', 'auto'],
                            clip: 'rect(0px 568px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16_09.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy13',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['299', '195', '626', '312', 'auto', 'auto'],
                            id: 'G16',
                            symbolName: 'G16',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1049px', '195px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy16',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy16',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy16',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S16_re',
                            symbolName: 'S16_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S16_Zoom',
                            symbolName: 'S16_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid484",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S16_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid532",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S16_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid434",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S16_09}",
                            [0,568,-5,0],
                            [0,568,111,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid233",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S16_03}",
                            [0,606,-8,0],
                            [0,606,320,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid237",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid483",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S16_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid231",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S16_02}",
                            [0,1091,-9,0],
                            [0,1091,33,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid485",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S16_Zoom}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_17": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S17_01',
                            type: 'image',
                            rect: ['174', '60', '148px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S17_01.png', '0px', '0px']
                        },
                        {
                            rect: ['107', '133', '1080px', '59px', 'auto', 'auto'],
                            id: 'S17_02',
                            type: 'image',
                            clip: 'rect(0px 1080px -17px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S17_02.png', '0px', '0px']
                        },
                        {
                            rect: ['506', '206', '281px', '267px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S17_03',
                            opacity: '0',
                            clip: 'rect(0px 281px -9.953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S17_03.png', '0px', '0px']
                        },
                        {
                            rect: ['554px', '241px', '55px', '92px', 'auto', 'auto'],
                            id: 'S17_04',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S17_04.png', '-10.46875px', '-114.15625px']
                        },
                        {
                            rect: ['227', '446', '746px', '197px', 'auto', 'auto'],
                            id: 'S17_05',
                            type: 'image',
                            clip: 'rect(0px 746px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S17_05.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy14',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'play_reCopy17',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['990px', '231px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy17',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy17',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy17',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S17_re',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S17_re'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S17_lens',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto'],
                            id: 'S17_lens'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid922",
                            "background-position",
                            750,
                            500,
                            "linear",
                            "${S17_04}",
                            [-10.46875,-114.15625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid250",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S17_02}",
                            [0,1080,-17,0],
                            [0,1080,59,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid264",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S17_05}",
                            [0,746,-7,0],
                            [0,746,197,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid435",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid925",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${S17_03}",
                            [0,281,-9.953125,0],
                            [0,281,267,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid486",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S17_lens}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid488",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S17_lens}",
                            'none',
                            'none'
                        ],
                        [
                            "eid407",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S17_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid487",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S17_lens}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_18": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S18_01',
                            type: 'image',
                            rect: ['156', '58', '308px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S18_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S18_02',
                            rect: ['104', '151', '1085px', '54px', 'auto', 'auto'],
                            clip: 'rect(0px 1085px -4px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S18_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S18_03',
                            rect: ['384', '233', '552px', '205px', 'auto', 'auto'],
                            clip: 'rect(0px 552px -15px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S18_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S18_07',
                            rect: ['337', '465', '660px', '165px', 'auto', 'auto'],
                            clip: 'rect(0px 660px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S18_07.png', '0px', '0px']
                        },
                        {
                            rect: ['357', '227', '567', '221', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G18',
                            symbolName: 'G18',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'iCopy15',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1072px', '227px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy18',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy18',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy18',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S18_re',
                            symbolName: 'S18_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S18_Zoom',
                            symbolName: 'S18_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid436",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid268",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S18_03}",
                            [0,552,-15,0],
                            [0,552,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid266",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S18_02}",
                            [0,1085,-4,0],
                            [0,1085,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid281",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S18_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid270",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S18_07}",
                            [0,660,-9,0],
                            [0,660,165,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid489",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S18_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid491",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S18_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid490",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S18_Zoom}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Slide_19": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S19_01',
                            type: 'image',
                            rect: ['151', '58', '247px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S19_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S19_02',
                            rect: ['122', '140', '1037px', '92px', 'auto', 'auto'],
                            clip: 'rect(0px 1037px -12px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S19_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S19_03',
                            rect: ['433', '248', '413px', '203px', 'auto', 'auto'],
                            clip: 'rect(0px 413px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S19_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S19_06',
                            rect: ['346', '477', '647px', '147px', 'auto', 'auto'],
                            clip: 'rect(0px 647px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S19_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy16',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['379', '248', '495', '203', 'auto', 'auto'],
                            id: 'G19',
                            symbolName: 'G19',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1037px', '248px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy19',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy19',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy19',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S19_re',
                            symbolName: 'S19_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S19_Zoom',
                            symbolName: 'S19_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1070,
                    autoPlay: false,
                    data: [
                        [
                            "eid494",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S19_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid492",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S19_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid285",
                            "clip",
                            250,
                            500,
                            "linear",
                            "${S19_03}",
                            [0,413,-7,0],
                            [0,413,203,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid289",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${G19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid283",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S19_02}",
                            [0,1037,-12,0],
                            [0,1037,92,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid533",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S19_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid437",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid493",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S19_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid287",
                            "clip",
                            750,
                            320,
                            "linear",
                            "${S19_06}",
                            [0,647,-9,0],
                            [0,647,147,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_20": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S20_01',
                            type: 'image',
                            rect: ['170', '55', '156px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S20_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S20_02',
                            rect: ['80', '148', '1119px', '87px', 'auto', 'auto'],
                            clip: 'rect(0px 1119px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S20_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S20_03',
                            rect: ['405', '255', '406px', '221px', 'auto', 'auto'],
                            clip: 'rect(0px 406px -7px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S20_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S20_06',
                            rect: ['363', '485', '608px', '163px', 'auto', 'auto'],
                            clip: 'rect(0px 608px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S20_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy17',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['354', '247', '498', '229', 'auto', 'auto'],
                            id: 'G20',
                            symbolName: 'G20',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1005px', '269px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy20',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy20',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy20',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S20_re',
                            symbolName: 'S20_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S20_Zoom',
                            symbolName: 'S20_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid302",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S20_06}",
                            [0,608,-9,0],
                            [0,608,163,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid534",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S20_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid497",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S20_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid296",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S20_02}",
                            [0,1119,-7,0],
                            [0,1119,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid438",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid496",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S20_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid300",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S20_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid298",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S20_03}",
                            [0,406,-7,0],
                            [0,406,221,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_21": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S21_01',
                            type: 'image',
                            rect: ['159', '55', '156px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S21_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S21_02',
                            rect: ['108', '143', '1064px', '62px', 'auto', 'auto'],
                            clip: 'rect(0px 1064px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S21_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S21_03',
                            rect: ['422', '220', '416px', '257px', 'auto', 'auto'],
                            clip: 'rect(0px 416px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S21_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S21_06',
                            rect: ['344', '477', '630px', '169px', 'auto', 'auto'],
                            clip: 'rect(0px 630px -5px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S21_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy18',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['377', '220', '511', '257', 'auto', 'auto'],
                            id: 'G21',
                            symbolName: 'G21',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['1034px', '220px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy21',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy21',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy21',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S21_re',
                            symbolName: 'S21_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S21_Zoom',
                            symbolName: 'S21_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid499",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S21_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid313",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S21_03}",
                            [0,416,-5,0],
                            [0,416,257,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid439",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S21_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid309",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S21_02}",
                            [0,1064,-6,0],
                            [0,1064,62,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid498",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S21_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid500",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S21_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid315",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid317",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S21_06}",
                            [0,630,-5,0],
                            [0,630,169,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_22": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S22_01',
                            type: 'image',
                            rect: ['164', '52', '331px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S22_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S22_02',
                            rect: ['108', '130', '1078px', '94px', 'auto', 'auto'],
                            clip: 'rect(0px 1078px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S22_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S22_03',
                            rect: ['383', '222', '560px', '197px', 'auto', 'auto'],
                            clip: 'rect(0px 560px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S22_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S22_06',
                            rect: ['352', '420', '610px', '228px', 'auto', 'auto'],
                            clip: 'rect(0px 610px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S22_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy19',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['351', '222', '625', '197', 'auto', 'auto'],
                            type: 'rect',
                            id: 'G22',
                            symbolName: 'G22',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            rect: ['1005px', '209px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy28',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy28',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy28',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'S22_re',
                            symbolName: 'S22_re',
                            display: 'none',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S22_Zoom',
                            symbolName: 'S22_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid330",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S22_06}",
                            [0,610,-6,0],
                            [0,610,228,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid501",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S22_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid328",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid324",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S22_02}",
                            [0,1078,-10,0],
                            [0,1078,94,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid536",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S22_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid326",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S22_03}",
                            [0,560,-9,0],
                            [0,560,197,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid519",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid502",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S22_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid503",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S22_Zoom}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_23": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S23_01',
                            type: 'image',
                            rect: ['160', '55', '331px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S23_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S23_02',
                            rect: ['119', '145', '1056px', '94px', 'auto', 'auto'],
                            clip: 'rect(0px 1056px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S23_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S23_03',
                            rect: ['372', '241', '503px', '264px', 'auto', 'auto'],
                            clip: 'rect(0px 503px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S23_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S23_06',
                            rect: ['368', '523', '624px', '116px', 'auto', 'auto'],
                            clip: 'rect(0px 624px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S23_06.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy20',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'play_reCopy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['1034px', '259px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy23',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy23',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy23',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['357', '272', '503', '240', 'auto', 'auto'],
                            id: 'G23',
                            symbolName: 'G23',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            type: 'rect',
                            id: 'S23_re',
                            symbolName: 'S23_re',
                            display: 'none',
                            rect: ['0px', '0', '1280', '768', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'S23_Zoom',
                            symbolName: 'S23_Zoom',
                            display: 'none',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid505",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S23_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid347",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid343",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S23_03}",
                            [0,503,-6,0],
                            [0,503,264,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid504",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S23_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid345",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S23_06}",
                            [0,624,-10,0],
                            [0,624,116,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid341",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S23_02}",
                            [0,1056,-10,0],
                            [0,1056,94,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid872",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S23_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid506",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S23_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid441",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy23}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_24": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S24_01',
                            type: 'image',
                            rect: ['152', '56', '151px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S24_01.png', '0px', '0px']
                        },
                        {
                            rect: ['136', '156', '672px', '33px', 'auto', 'auto'],
                            id: 'S24_02',
                            type: 'image',
                            clip: 'rect(0px 672px -3px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S24_02.png', '0px', '0px']
                        },
                        {
                            rect: ['296', '204', '546px', '269px', 'auto', 'auto'],
                            id: 'S24_03',
                            type: 'image',
                            clip: 'rect(0px 546px -11px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S24_03.png', '0px', '0px']
                        },
                        {
                            rect: ['187', '532', '764px', '68px', 'auto', 'auto'],
                            id: 'S24_08',
                            type: 'image',
                            clip: 'rect(0px 764px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S24_08.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy21',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'play_reCopy24',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            id: 'G24',
                            symbolName: 'G24',
                            opacity: '0',
                            rect: ['252', '233', '607', '248', 'auto', 'auto']
                        },
                        {
                            rect: ['972', '187', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy24',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy24',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy24',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S24_re',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S24_re'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S24_Zoom',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto'],
                            id: 'S24_Zoom'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid356",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S24_03}",
                            [0,546,-11,0],
                            [0,546,269,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid507",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S24_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid537",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S24_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid442",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S24_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid508",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S24_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid358",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid360",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S24_08}",
                            [0,764,0,0],
                            [0,764,68,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid354",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S24_02}",
                            [0,672,-3,0],
                            [0,672,33,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_25": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S25_01',
                            type: 'image',
                            rect: ['153', '55', '294px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S25_01.png', '0px', '0px']
                        },
                        {
                            rect: ['396', '136', '428px', '411px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S25_02',
                            type: 'image',
                            clip: 'rect(0px 428px -9.64599609375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S25_02.png', '0px', '0px']
                        },
                        {
                            rect: ['575', '232', '77px', '136px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S25_03',
                            opacity: '0',
                            clip: 'rect(0px 77px -7.583251953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S25_03.png', '0px', '0px']
                        },
                        {
                            rect: ['142', '521', '803px', '68px', 'auto', 'auto'],
                            id: 'S25_04',
                            type: 'image',
                            clip: 'rect(0px 803px -10px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S25_04.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy22',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'play_reCopy25',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['952', '136', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy25',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy25',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy25',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'S25_re',
                            cursor: 'pointer',
                            id: 'S25_re'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S25_lens',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto'],
                            id: 'S25_lens'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid510",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S25_lens}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid377",
                            "clip",
                            809,
                            441,
                            "linear",
                            "${S25_04}",
                            [0,803,-10,0],
                            [0,803,68,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid929",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S25_02}",
                            [0,428,-9.64599609375,0],
                            [0,428,411,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid511",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S25_lens}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid512",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S25_lens}",
                            'none',
                            'none'
                        ],
                        [
                            "eid538",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S25_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid932",
                            "clip",
                            500,
                            309,
                            "linear",
                            "${S25_03}",
                            [0,77,-7.583251953125,0],
                            [0,77,136,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid443",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy25}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_26": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S26_01',
                            type: 'image',
                            rect: ['145', '51', '388px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S26_01.png', '0px', '0px']
                        },
                        {
                            rect: ['169', '150', '986px', '68px', 'auto', 'auto'],
                            id: 'S26_02',
                            type: 'image',
                            clip: 'rect(0px 986px -8px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S26_02.png', '0px', '0px']
                        },
                        {
                            rect: ['322', '239', '636px', '395px', 'auto', 'auto'],
                            id: 'S26_03',
                            type: 'image',
                            clip: 'rect(0px 636px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S26_03.png', '0px', '0px']
                        },
                        {
                            id: 'iCopy23',
                            type: 'image',
                            rect: ['1073px', '20px', '77px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/i.png', '0px', '0px']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1075px', '26', '70', '65', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'play_reCopy26',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'rect',
                            opacity: '0',
                            id: 'G26',
                            symbolName: 'G26',
                            cursor: 'pointer',
                            rect: ['308', '239', '674', '395', 'auto', 'auto']
                        },
                        {
                            rect: ['1022px', '261px', '76', '76', 'auto', 'auto'],
                            id: 'play_ZoomCopy26',
                            opacity: '0',
                            cursor: 'pointer',
                            type: 'group',
                            c: [
                            {
                                id: 'Zoom_outCopy26',
                                type: 'image',
                                rect: ['0', '0', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/Zoom%20out.png', '0px', '0px']
                            },
                            {
                                rect: ['32', '19', 'auto', 'auto', 'auto', 'auto'],
                                id: 'TextCopy26',
                                text: '+',
                                font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(251,251,251,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S26_re',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            id: 'S26_re'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'S26_Zoom',
                            rect: ['0', '0', '1280', '769', 'auto', 'auto'],
                            id: 'S26_Zoom'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid383",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${G26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid381",
                            "clip",
                            250,
                            750,
                            "linear",
                            "${S26_03}",
                            [0,636,-9,0],
                            [0,636,395,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid514",
                            "top",
                            0,
                            0,
                            "linear",
                            "${S26_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid444",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${play_ZoomCopy26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid539",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S26_re}",
                            'none',
                            'none'
                        ],
                        [
                            "eid515",
                            "display",
                            0,
                            0,
                            "linear",
                            "${S26_Zoom}",
                            'none',
                            'none'
                        ],
                        [
                            "eid513",
                            "left",
                            0,
                            0,
                            "linear",
                            "${S26_Zoom}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid379",
                            "clip",
                            0,
                            250,
                            "linear",
                            "${S26_02}",
                            [0,986,-8,0],
                            [0,986,68,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_27": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S27_01',
                            type: 'image',
                            rect: ['141', '57', '354px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S27_01.png', '0px', '0px']
                        },
                        {
                            rect: ['312', '174', '655px', '307px', 'auto', 'auto'],
                            id: 'S27_02',
                            type: 'image',
                            clip: 'rect(0px 655px -11px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S27_02.png', '0px', '0px']
                        },
                        {
                            rect: ['131', '513', '846px', '29px', 'auto', 'auto'],
                            id: 'S27_03',
                            type: 'image',
                            clip: 'rect(0px 846px -13px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S27_03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid390",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S27_03}",
                            [0,846,-13,0],
                            [0,846,29,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid388",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S27_02}",
                            [0,655,-11,0],
                            [0,655,307,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_28": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S28_01',
                            type: 'image',
                            rect: ['147', '55', '185px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S28_01.png', '0px', '0px']
                        },
                        {
                            rect: ['58', '167', '1032px', '173px', 'auto', 'auto'],
                            id: 'S28_02',
                            type: 'image',
                            clip: 'rect(0px 1032px -9px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S28_02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid392",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S28_02}",
                            [0,1032,-9,0],
                            [0,1032,173,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_29": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S29_01',
                            type: 'image',
                            rect: ['149', '58', '141px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S29_01.png', '0px', '0px']
                        },
                        {
                            rect: ['116', '162', '686px', '328px', 'auto', 'auto'],
                            id: 'S29_02',
                            type: 'image',
                            clip: 'rect(0px 686px -12px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S29_02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid394",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S29_02}",
                            [0,686,-12,0],
                            [0,686,328,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_30": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S30_01',
                            type: 'image',
                            rect: ['133', '58', '94px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S30_01.png', '0px', '0px']
                        },
                        {
                            rect: ['55', '186', '453px', '74px', 'auto', 'auto'],
                            id: 'S30_02',
                            type: 'image',
                            clip: 'rect(0px 453px -6px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S30_02.png', '0px', '0px']
                        },
                        {
                            rect: ['643', '147', '273px', '226px', 'auto', 'auto'],
                            id: 'S30_03',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S30_03.png', '291.28125px', '-255.25px']
                        },
                        {
                            rect: ['55', '365', '494px', '183px', 'auto', 'auto'],
                            id: 'S30_04',
                            type: 'image',
                            clip: 'rect(0px 494px -11px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S30_04.png', '0px', '0px']
                        },
                        {
                            rect: ['546', '373', '476px', '213px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            id: 'S30_05',
                            type: 'image',
                            clip: 'rect(0px -12.953125px 213px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S30_05.png', '0px', '0px']
                        },
                        {
                            rect: ['65', '598', '844px', '33px', 'auto', 'auto'],
                            id: 'S30_06',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S30_06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid936",
                            "background-position",
                            500,
                            500,
                            "linear",
                            "${S30_03}",
                            [291.28125,-255.25],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid396",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${S30_02}",
                            [0,453,-6,0],
                            [0,453,74,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid680",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${S30_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid402",
                            "clip",
                            1000,
                            500,
                            "linear",
                            "${S30_04}",
                            [0,494,-11,0],
                            [0,494,183,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid940",
                            "clip",
                            1500,
                            500,
                            "linear",
                            "${S30_05}",
                            [0,-12.953125,213,0],
                            [0,476,213,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "S_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            opacity: '0.80853659689911',
                            id: 'lens',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'S1_re',
                            rect: ['392', '230', '495px', '227px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S2_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: [0, 0, 1280, 768, 'auto', 'auto'],
                            opacity: '0.8085365891456604',
                            id: 'lens',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'image',
                            id: 'S2_re',
                            rect: [392, 270, '495px', '227px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S2_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 1280, 768]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S3_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S3_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S3_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S4_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy2',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S4_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S4_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S5_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy3',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S5_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S5_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S7_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy4',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S7_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S7_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S6_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy5',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S6_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S6_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S8_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy6',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['393', '270', '494px', '227px', 'auto', 'auto'],
                            id: 'S8_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S8_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S9_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy7',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S9_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S9_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S10_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy8',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['381', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S10_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S10_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S11_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy9',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S11_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S11_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S12_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy10',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['408', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S12_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S12_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S13_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy11',
                            opacity: '0.8085365891456604',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'S13_re',
                            type: 'image',
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S13_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S15_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy12',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '285', '495px', '226px', 'auto', 'auto'],
                            id: 'S15_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S15_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S16_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy13',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S16_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S16_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S17_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy14',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S17_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S17_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S18_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy16',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S18_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S18_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S19_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy17',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S19_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S19_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S20_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy18',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S20_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S20_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S21_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy19',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S21_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S21_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S22_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy20',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S22_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S22_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S23_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy21',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['385', '264', '509px', '239px', 'auto', 'auto'],
                            id: 'S23_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S23_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S24_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy22',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['399', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S24_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S24_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S25_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy23',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['392', '270', '495px', '227px', 'auto', 'auto'],
                            id: 'S25_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S25_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S26_re": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280', '768', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'lensCopy24',
                            opacity: '0.8085365891456604',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['411', '271', '495px', '226px', 'auto', 'auto'],
                            id: 'S26_re',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S26_re.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "G1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            cursor: 'pointer',
                            rect: ['116', '48', '452', '170', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S1_08',
                                rect: ['407', '27', '45px', '143px', 'auto', 'auto'],
                                clip: 'rect(150px 45px 143px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_08.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S1_07',
                                rect: ['304', '101', '44px', '69px', 'auto', 'auto'],
                                clip: 'rect(72px 44px 69px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_07.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S1_06',
                                rect: ['201', '0', '44px', '170px', 'auto', 'auto'],
                                clip: 'rect(170px 44px 170px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_06.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S1_05',
                                rect: ['96', '76', '45px', '94px', 'auto', 'auto'],
                                clip: 'rect(94px 45px 94px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S1_04',
                                rect: ['0', '49', '43px', '120px', 'auto', 'auto'],
                                clip: 'rect(130px 43px 120px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S1_04.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '623px', '320px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '257px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '623', '320']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid14",
                            "clip",
                            750,
                            250,
                            "linear",
                            "${S1_06}",
                            [170,44,170,0],
                            [0,44,170,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text2}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid8",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S1_04}",
                            [130,43,120,0],
                            [0,43,120,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid12",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S1_05}",
                            [94,45,94,0],
                            [0,45,94,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S1_08}",
                            [150,45,143,0],
                            [0,45,143,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid16",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S1_07}",
                            [72,44,69,0],
                            [0,44,69,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group2',
                            cursor: 'pointer',
                            rect: ['102', '22', '316', '195', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S2_05',
                                rect: ['67', '0', '249px', '194px', 'auto', 'auto'],
                                clip: 'rect(200px 249px 194px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S2_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S2_04',
                                rect: ['0', '0', '248px', '195px', 'auto', 'auto'],
                                clip: 'rect(202px 248px 195px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S2_04.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '516px', '255px', 'auto', 'auto'],
                            text: 'Tap here<br>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '230px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '616', '255']
                        }
                    }
                },
                timeline: {
                    duration: 869,
                    autoPlay: false,
                    data: [
                        [
                            "eid48",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text3}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid45",
                            "clip",
                            250,
                            305,
                            "linear",
                            "${S2_04}",
                            [202,248,195,0],
                            [0,248,195,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid47",
                            "clip",
                            555,
                            314,
                            "linear",
                            "${S2_05}",
                            [200,249,194,0],
                            [0,249,194,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group3',
                            cursor: 'pointer',
                            rect: ['175', '82', '304', '149', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S3_04',
                                rect: ['0', '0', '141px', '45px', 'auto', 'auto'],
                                clip: 'rect(0px -5px 45px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S3_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S3_05',
                                rect: ['0', '103', '304px', '46px', 'auto', 'auto'],
                                clip: 'rect(0px -4px 46px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S3_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['143px', '0px', '406px', '278px', 'auto', 'auto'],
                            opacity: '0.2682926654815674',
                            text: 'Tap here',
                            id: 'Text4',
                            textStyle: ['', '', '242px', ''],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '584', '278']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid63",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text4}",
                            '0.2682926654815674',
                            '0'
                        ],
                        [
                            "eid60",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S3_04}",
                            [0,-5,45,0],
                            [0,141,45,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid62",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S3_05}",
                            [0,-4,46,0],
                            [0,304,46,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G4": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group4',
                            cursor: 'pointer',
                            rect: ['130', '32', '252', '157', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S4_05',
                                rect: ['51', '31', '201px', '126px', 'auto', 'auto'],
                                clip: 'rect(134px 201px 126px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S4_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S4_04',
                                rect: ['0', '0', '204px', '157px', 'auto', 'auto'],
                                clip: 'rect(166px 204px 157px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S4_04.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            opacity: '0.26829269528388977',
                            cursor: 'pointer',
                            rect: ['58px', '0px', '376px', '209px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '191px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '546', '209']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid71",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S4_04}",
                            [166,204,157,0],
                            [0,204,157,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid73",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S4_05}",
                            [134,201,126,0],
                            [0,201,126,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid74",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text5}",
                            '0.26829269528388977',
                            '0'
                        ]
                    ]
                }
            },
            "G5": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group5',
                            cursor: 'pointer',
                            rect: ['113', '27', '304', '185', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S5_04',
                                rect: ['0', '0', '283px', '185px', 'auto', 'auto'],
                                clip: 'rect(190px 283px 185px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S5_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S5_05',
                                rect: ['28', '23', '276px', '162px', 'auto', 'auto'],
                                clip: 'rect(170px 276px 162px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S5_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['46px', '-1px', '409px', '237px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '209px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '571', '236']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid87",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text6}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid86",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S5_05}",
                            [170,276,162,0],
                            [0,276,162,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid84",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S5_04}",
                            [190,283,185,0],
                            [0,283,185,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G7": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['116', '39', '446', '170', 'auto', 'auto'],
                            id: 'Group6',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'S7_04',
                                rect: ['0', '49', '43px', '121px', 'auto', 'auto'],
                                clip: 'rect(120px 43px 121px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S7_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S7_05',
                                rect: ['100', '76', '45px', '94px', 'auto', 'auto'],
                                clip: 'rect(96px 45px 94px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S7_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S7_06',
                                rect: ['199', '0', '44px', '170px', 'auto', 'auto'],
                                clip: 'rect(180px 44px 170px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S7_06.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S7_07',
                                rect: ['301', '101', '44px', '69px', 'auto', 'auto'],
                                clip: 'rect(76px 44px 69px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S7_07.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S7_08',
                                rect: ['401', '26', '45px', '144px', 'auto', 'auto'],
                                clip: 'rect(150px 45px 144px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S7_08.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            opacity: '0.26829269528388977',
                            cursor: 'pointer',
                            rect: ['45px', '0px', '563px', '277px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '243px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '625', '302']
                        }
                    }
                },
                timeline: {
                    duration: 1805,
                    autoPlay: false,
                    data: [
                        [
                            "eid100",
                            "clip",
                            250,
                            305,
                            "linear",
                            "${S7_04}",
                            [120,43,121,0],
                            [0,43,121,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid108",
                            "clip",
                            1500,
                            305,
                            "linear",
                            "${S7_08}",
                            [150,45,144,0],
                            [0,45,144,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid106",
                            "clip",
                            1170,
                            330,
                            "linear",
                            "${S7_07}",
                            [76,44,69,0],
                            [0,44,69,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid102",
                            "clip",
                            555,
                            314,
                            "linear",
                            "${S7_05}",
                            [96,45,94,0],
                            [0,45,94,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid109",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text7}",
                            '0.26829269528388977',
                            '0'
                        ],
                        [
                            "eid104",
                            "clip",
                            869,
                            301,
                            "linear",
                            "${S7_06}",
                            [180,44,170,0],
                            [0,44,170,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G6": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group7',
                            cursor: 'pointer',
                            rect: ['97', '29', '319', '195', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S6_04',
                                rect: ['0', '0', '285px', '195px', 'auto', 'auto'],
                                clip: 'rect(206px 285px 195px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S6_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S6_05',
                                rect: ['35', '19', '284px', '176px', 'auto', 'auto'],
                                clip: 'rect(182px 284px 176px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S6_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text8',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['15px', '0px', '489px', '246px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '199px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '604', '246']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid124",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text8}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid121",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S6_04}",
                            [206,285,195,0],
                            [0,285,195,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid123",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S6_05}",
                            [182,284,176,0],
                            [0,284,176,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G8": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['117', '18', '304', '196', 'auto', 'auto'],
                            id: 'Group8',
                            type: 'group',
                            c: [
                            {
                                type: 'image',
                                id: 'S8_04',
                                rect: ['0', '0', '248px', '196px', 'auto', 'auto'],
                                clip: 'rect(200px 248px 196px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S8_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S8_05',
                                rect: ['55', '1', '249px', '195px', 'auto', 'auto'],
                                clip: 'rect(200px 249px 195px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S8_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text9',
                            opacity: '0.26016250252723694',
                            cursor: 'pointer',
                            rect: ['40px', '6px', '469px', '238px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '208px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '605', '244']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid136",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S8_05}",
                            [200,249,195,0],
                            [0,249,195,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid134",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S8_04}",
                            [200,248,196,0],
                            [0,248,196,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text9}",
                            '0.26016250252723694',
                            '0'
                        ]
                    ]
                }
            },
            "G9": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group9',
                            cursor: 'pointer',
                            rect: ['136', '83', '304', '139', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S9_05',
                                rect: ['0', '93', '304px', '46px', 'auto', 'auto'],
                                clip: 'rect(0px -6px 46px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S9_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S9_04',
                                rect: ['0', '0', '141px', '45px', 'auto', 'auto'],
                                clip: 'rect(0px -7px 45px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S9_04.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['88px', '0px', '389px', '259px', 'auto', 'auto'],
                            opacity: '0.2520325183868408',
                            text: 'Tap here',
                            id: 'Text10',
                            textStyle: ['', '', '237px', ''],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '522', '268']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid155",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S9_04}",
                            [0,-7,45,0],
                            [0,141,45,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid157",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S9_05}",
                            [0,-6,46,0],
                            [0,304,46,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid158",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text10}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group11',
                            cursor: 'pointer',
                            rect: ['186', '20', '247', '157', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S10_05',
                                rect: ['47', '31', '200px', '126px', 'auto', 'auto'],
                                clip: 'rect(132px 200px 126px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S10_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S10_04',
                                rect: ['0', '0', '204px', '157px', 'auto', 'auto'],
                                clip: 'rect(162px 204px 157px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S10_04.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text11',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['124px', '0px', '380px', '196px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '158px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '609', '206']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid169",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S10_04}",
                            [162,204,157,0],
                            [0,204,157,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid171",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S10_05}",
                            [132,200,126,0],
                            [0,200,126,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid167",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text11}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group12',
                            cursor: 'pointer',
                            rect: ['87', '28', '321', '194', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S11_04',
                                rect: ['0', '12px', '286px', '194px', 'auto', 'auto'],
                                clip: 'rect(202px 286px 194px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S11_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S11_05',
                                rect: ['36', '29px', '285px', '176px', 'auto', 'auto'],
                                clip: 'rect(186px 285px 176px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S11_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['56px', '15px', '380px', '219px', 'auto', 'auto'],
                            opacity: '0.2601625919342041',
                            text: 'Tap here',
                            id: 'Text12',
                            textStyle: ['', '', '207px', ''],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '579', '248']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid180",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text12}",
                            '0.2601625919342041',
                            '0'
                        ],
                        [
                            "eid184",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S11_05}",
                            [186,285,176,0],
                            [0,285,176,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid182",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S11_04}",
                            [202,286,194,0],
                            [0,286,194,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group13',
                            cursor: 'pointer',
                            rect: ['76', '30', '304', '185', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S12_04',
                                rect: ['0', '0', '283px', '185px', 'auto', 'auto'],
                                clip: 'rect(192px 283px 185px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S12_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S12_05',
                                rect: ['28', '22', '276px', '163px', 'auto', 'auto'],
                                clip: 'rect(168px 276px 163px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S12_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text13',
                            opacity: '0.24390244483947754',
                            cursor: 'pointer',
                            rect: ['50px', '0px', '345px', '222px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '203px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '522', '236']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid193",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text13}",
                            '0.24390244483947754',
                            '0'
                        ],
                        [
                            "eid195",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S12_04}",
                            [192,283,185,0],
                            [0,283,185,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid197",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S12_05}",
                            [168,276,163,0],
                            [0,276,163,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group14',
                            cursor: 'pointer',
                            rect: ['146', '90', '312', '154', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S13_04',
                                rect: ['0', '0', '312px', '51px', 'auto', 'auto'],
                                clip: 'rect(0px -6px 51px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S13_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S13_05',
                                rect: ['0', '102', '271px', '52px', 'auto', 'auto'],
                                clip: 'rect(0px -17px 52px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S13_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text14',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['132px', '0px', '376px', '274px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '264px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '561', '309']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid210",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S13_05}",
                            [0,-17,52,0],
                            [0,271,52,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid208",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S13_04}",
                            [0,-6,51,0],
                            [0,312,51,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid206",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text14}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group15',
                            cursor: 'pointer',
                            rect: ['143', '74', '304', '150', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S15_04',
                                rect: ['0', '0', '141px', '45px', 'auto', 'auto'],
                                clip: 'rect(0px 1px 45px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S15_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S15_05',
                                rect: ['0', '104', '304px', '46px', 'auto', 'auto'],
                                clip: 'rect(0px -4px 46px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S15_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text15',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['132px', '0px', '376px', '239px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '213px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '508', '268']
                        }
                    }
                },
                timeline: {
                    duration: 809,
                    autoPlay: false,
                    data: [
                        [
                            "eid223",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text15}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid225",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S15_04}",
                            [0,1,45,0],
                            [0,141,45,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid227",
                            "clip",
                            548,
                            261,
                            "linear",
                            "${S15_05}",
                            [0,-4,46,0],
                            [0,304,46,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G16": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group16',
                            cursor: 'pointer',
                            rect: ['114', '42', '451', '171', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S16_04',
                                rect: ['0', '48', '43px', '121px', 'auto', 'auto'],
                                clip: 'rect(132px 43px 121px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S16_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S16_05',
                                rect: ['97', '76', '45px', '94px', 'auto', 'auto'],
                                clip: 'rect(102px 45px 94px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S16_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S16_06',
                                rect: ['194', '0', '44px', '170px', 'auto', 'auto'],
                                clip: 'rect(176px 44px 170px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S16_06.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S16_07',
                                rect: ['301', '102', '44px', '69px', 'auto', 'auto'],
                                clip: 'rect(78px 44px 69px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S16_07.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S16_08',
                                rect: ['406', '27', '45px', '144px', 'auto', 'auto'],
                                clip: 'rect(152px 45px 144px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S16_08.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text16',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['61px', '0px', '547px', '222px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '212px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '626', '312']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid240",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S16_04}",
                            [132,43,121,0],
                            [0,43,121,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid238",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text16}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid246",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S16_07}",
                            [78,44,69,0],
                            [0,44,69,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid244",
                            "clip",
                            750,
                            250,
                            "linear",
                            "${S16_06}",
                            [176,44,170,0],
                            [0,44,170,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid248",
                            "clip",
                            1250,
                            250,
                            "linear",
                            "${S16_08}",
                            [152,45,144,0],
                            [0,45,144,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid242",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S16_05}",
                            [102,45,94,0],
                            [0,45,94,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G18": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group17',
                            cursor: 'pointer',
                            rect: ['132', '19', '364', '169', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S18_04',
                                rect: ['0', '0', '52px', '169px', 'auto', 'auto'],
                                clip: 'rect(176px 52px 169px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S18_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S18_05',
                                rect: ['145', '82', '52px', '87px', 'auto', 'auto'],
                                clip: 'rect(100px 52px 87px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S18_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S18_06',
                                rect: ['312', '83', '52px', '85px', 'auto', 'auto'],
                                clip: 'rect(94px 52px 85px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S18_06.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text18',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['55px', '0px', '486px', '202px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '190px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '567', '221']
                        }
                    }
                },
                timeline: {
                    duration: 1150,
                    autoPlay: false,
                    data: [
                        [
                            "eid279",
                            "clip",
                            849,
                            301,
                            "linear",
                            "${S18_06}",
                            [94,52,85,0],
                            [0,52,85,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid273",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text18}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid275",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S18_04}",
                            [176,52,169,0],
                            [0,52,169,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid277",
                            "clip",
                            548,
                            301,
                            "linear",
                            "${S18_05}",
                            [100,52,87,0],
                            [0,52,87,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G19": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group18',
                            cursor: 'pointer',
                            rect: ['157', '10', '201', '169', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S19_04',
                                rect: ['0', '0', '52px', '169px', 'auto', 'auto'],
                                clip: 'rect(174px 52px 169px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S19_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S19_05',
                                rect: ['149', '0', '52px', '169px', 'auto', 'auto'],
                                clip: 'rect(176px 52px 169px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S19_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text20',
                            opacity: '0.2601625919342041',
                            cursor: 'pointer',
                            rect: ['72px', '0px', '377px', '189px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '168px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '495', '203']
                        }
                    }
                },
                timeline: {
                    duration: 856,
                    autoPlay: false,
                    data: [
                        [
                            "eid292",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S19_04}",
                            [174,52,169,0],
                            [0,52,169,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid290",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text20}",
                            '0.2601625919342041',
                            '0'
                        ],
                        [
                            "eid294",
                            "clip",
                            548,
                            308,
                            "linear",
                            "${S19_05}",
                            [176,52,169,0],
                            [0,52,169,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G20": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group19',
                            cursor: 'pointer',
                            rect: ['141', '71', '200', '134', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S20_04',
                                rect: ['0', '0', '51px', '134px', 'auto', 'auto'],
                                clip: 'rect(142px 51px 134px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S20_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S20_05',
                                rect: ['148', '73', '52px', '61px', 'auto', 'auto'],
                                clip: 'rect(70px 52px 61px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S20_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text21',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['78px', '15px', '384px', '203px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '185px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498', '229']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid307",
                            "clip",
                            500,
                            250,
                            "linear",
                            "${S20_05}",
                            [70,52,61,0],
                            [0,52,61,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid305",
                            "clip",
                            250,
                            250,
                            "linear",
                            "${S20_04}",
                            [142,51,134,0],
                            [0,51,134,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid303",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text21}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G21": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group20',
                            cursor: 'pointer',
                            rect: ['144', '45', '200', '189', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S21_04',
                                rect: ['0', '0', '55px', '188px', 'auto', 'auto'],
                                clip: 'rect(192px 55px 188px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S21_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S21_05',
                                rect: ['148', '85', '52px', '104px', 'auto', 'auto'],
                                clip: 'rect(108px 52px 104px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S21_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['58px', '0px', '419px', '257px', 'auto', 'auto'],
                            opacity: '0.2520325183868408',
                            text: 'Tap here',
                            id: 'Text22',
                            textStyle: ['', '', '247px', ''],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '511', '257']
                        }
                    }
                },
                timeline: {
                    duration: 862,
                    autoPlay: false,
                    data: [
                        [
                            "eid322",
                            "clip",
                            555,
                            307,
                            "linear",
                            "${S21_05}",
                            [108,52,104,0],
                            [0,52,104,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid318",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text22}",
                            '0.2520325183868408',
                            '0'
                        ],
                        [
                            "eid320",
                            "clip",
                            250,
                            305,
                            "linear",
                            "${S21_04}",
                            [192,55,188,0],
                            [0,55,188,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "G22": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group21',
                            cursor: 'pointer',
                            rect: ['124', '10', '304', '166', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S22_04',
                                rect: ['0', '0', '240px', '166px', 'auto', 'auto'],
                                clip: 'rect(172px 240px 166px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S22_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S22_05',
                                rect: ['59', '3', '245px', '163px', 'auto', 'auto'],
                                clip: 'rect(170px 245px 163px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S22_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text23',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['35px', '0px', '489px', '186px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '156px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '625', '197']
                        }
                    }
                },
                timeline: {
                    duration: 849,
                    autoPlay: false,
                    data: [
                        [
                            "eid339",
                            "clip",
                            548,
                            301,
                            "linear",
                            "${S22_05}",
                            [170,245,163,0],
                            [0,245,163,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid337",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S22_04}",
                            [172,240,166,0],
                            [0,240,166,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid331",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text23}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G23": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group22',
                            cursor: 'pointer',
                            rect: ['108', '20', '273', '192', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S23_04',
                                rect: ['0', '0', '52px', '192px', 'auto', 'auto'],
                                clip: 'rect(198px 52px 192px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S23_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S23_05',
                                rect: ['228', '34', '45px', '158px', 'auto', 'auto'],
                                clip: 'rect(168px 45px 158px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S23_05.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text24',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['58px', '-10px', '438px', '240px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '244px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '503', '240']
                        }
                    }
                },
                timeline: {
                    duration: 849,
                    autoPlay: false,
                    data: [
                        [
                            "eid352",
                            "clip",
                            548,
                            301,
                            "linear",
                            "${S23_05}",
                            [168,45,158,0],
                            [0,45,158,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid350",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S23_04}",
                            [198,52,192,0],
                            [0,52,192,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text24}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G24": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group23',
                            cursor: 'pointer',
                            rect: ['155px', '30px', '385', '165', 'auto', 'auto'],
                            c: [
                            {
                                type: 'image',
                                id: 'S24_04',
                                rect: ['0', '0', '56px', '165px', 'auto', 'auto'],
                                clip: 'rect(170px 56px 165px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S24_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S24_05',
                                rect: ['97', '38', '56px', '127px', 'auto', 'auto'],
                                clip: 'rect(134px 56px 127px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S24_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S24_06',
                                rect: ['212', '54', '56px', '111px', 'auto', 'auto'],
                                clip: 'rect(118px 56px 111px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S24_06.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                id: 'S24_07',
                                rect: ['329', '74', '56px', '91px', 'auto', 'auto'],
                                clip: 'rect(96px 56px 91px 0px)',
                                fill: ['rgba(0,0,0,0)', 'images/S24_07.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text25',
                            opacity: '0.2520325183868408',
                            cursor: 'pointer',
                            rect: ['70px', '0px', '532px', '228px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '215px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '607', '248']
                        }
                    }
                },
                timeline: {
                    duration: 1451,
                    autoPlay: false,
                    data: [
                        [
                            "eid369",
                            "clip",
                            1156,
                            295,
                            "linear",
                            "${S24_07}",
                            [96,56,91,0],
                            [0,56,91,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid363",
                            "clip",
                            250,
                            298,
                            "linear",
                            "${S24_04}",
                            [170,56,165,0],
                            [0,56,165,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid365",
                            "clip",
                            548,
                            308,
                            "linear",
                            "${S24_05}",
                            [134,56,127,0],
                            [0,56,127,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid367",
                            "clip",
                            856,
                            300,
                            "linear",
                            "${S24_06}",
                            [118,56,111,0],
                            [0,56,111,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid361",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text25}",
                            '0.2520325183868408',
                            '0'
                        ]
                    ]
                }
            },
            "G26": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: ['145', '16', '412px', '354px', 'auto', 'auto'],
                            id: 'S26_04',
                            clip: 'rect(0px -8px 354px 0px)',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S26_04.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text26',
                            opacity: '0.2601625919342041',
                            cursor: 'pointer',
                            rect: ['0px', '0px', '674px', '395px', 'auto', 'auto'],
                            text: 'Tap here',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(122,122,122,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            textStyle: ['', '', '386px', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '674', '395']
                        }
                    }
                },
                timeline: {
                    duration: 561,
                    autoPlay: false,
                    data: [
                        [
                            "eid386",
                            "clip",
                            250,
                            311,
                            "linear",
                            "${S26_04}",
                            [0,-8,354,0],
                            [0,412,354,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid384",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text26}",
                            '0.2601625919342041',
                            '0'
                        ]
                    ]
                }
            },
            "S1_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S1_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text2',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1172px', '134px', '108px', '77px', 'auto', 'auto']
                        },
                        {
                            id: 'S1_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S1_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S2_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S2_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            id: 'S2_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S2_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text3',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1174px', '115px', '106px', '77px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S3_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S3_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text4',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '91px', 'auto', 'auto']
                        },
                        {
                            id: 'S3_G2',
                            type: 'image',
                            rect: ['110px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S3_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S4_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S4_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1182', '115px', '98px', '82px', 'auto', 'auto']
                        },
                        {
                            id: 'S4_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S4_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S5_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S5_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            id: 'S5_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S5_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '75px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S6_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S6_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '67px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '66px', 'auto', 'auto']
                        },
                        {
                            id: 'S6_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S6_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S8_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S8_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy2',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '74px', 'auto', 'auto']
                        },
                        {
                            id: 'S8_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S8_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S7_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S7_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy3',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '76px', 'auto', 'auto']
                        },
                        {
                            id: 'S7_G2',
                            type: 'image',
                            rect: ['189px', '153px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S7_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S9_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S9_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy4',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '81px', 'auto', 'auto']
                        },
                        {
                            id: 'S9_G2',
                            type: 'image',
                            rect: ['109px', '121px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S9_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S10_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S10_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy5',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '84px', 'auto', 'auto']
                        },
                        {
                            id: 'S10_G2',
                            type: 'image',
                            rect: ['189px', '124px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S10_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S11_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S11_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy6',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1182', '115px', '98px', '78px', 'auto', 'auto']
                        },
                        {
                            id: 'S11_G2',
                            type: 'image',
                            rect: ['178px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S11_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S12_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S12_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '95px', 'auto', 'auto']
                        },
                        {
                            id: 'S12_G2',
                            type: 'image',
                            rect: ['189px', '127px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S12_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S13_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S13_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy8',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1182', '115px', '98px', '92px', 'auto', 'auto']
                        },
                        {
                            id: 'S13_G2',
                            type: 'image',
                            rect: ['88px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S13_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S15_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S15_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy9',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '104px', 'auto', 'auto']
                        },
                        {
                            id: 'S15_G2',
                            type: 'image',
                            rect: ['82px', '131px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S15_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S16_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S16_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy10',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '75px', 'auto', 'auto']
                        },
                        {
                            id: 'S16_G2',
                            type: 'image',
                            rect: ['189px', '153px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S16_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S17_lens": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S17_lENS',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy11',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '70px', 'auto', 'auto']
                        },
                        {
                            id: 'S17_G',
                            type: 'image',
                            rect: ['414px', '209px', '451px', '351px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S17_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S18_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S18_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy12',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '78px', 'auto', 'auto']
                        },
                        {
                            id: 'S18_G2',
                            type: 'image',
                            rect: ['181px', '145px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S18_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S19_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S19_G',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy13',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            rect: ['1181', '115px', '99px', '97px', 'auto', 'auto'],
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            align: 'center'
                        },
                        {
                            id: 'S19_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S19_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S20_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S20_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy14',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1175px', '115px', '105px', '80px', 'auto', 'auto']
                        },
                        {
                            id: 'S20_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S20_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S21_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S21_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy15',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1173px', '115px', '107px', '84px', 'auto', 'auto']
                        },
                        {
                            id: 'S21_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S21_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S22_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S22_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy16',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '73px', 'auto', 'auto']
                        },
                        {
                            id: 'S22_G2',
                            type: 'image',
                            rect: ['189px', '134px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S22_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S23_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S23_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy17',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1182', '115px', '98px', '76px', 'auto', 'auto']
                        },
                        {
                            id: 'S23_G2',
                            type: 'image',
                            rect: ['189px', '146px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S23_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S24_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S24_G',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy18',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1182', '113px', '98px', '90px', 'auto', 'auto']
                        },
                        {
                            id: 'S24_G2',
                            type: 'image',
                            rect: ['95px', '158px', '902px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S24_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S25_lens": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S25_LENS',
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy19',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '77px', 'auto', 'auto']
                        },
                        {
                            id: 'S25_G',
                            type: 'image',
                            rect: ['392px', '183px', '495px', '404px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S25_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "S26_Zoom": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280px', '769px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 5, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S26_G',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lens_G.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text7Copy20',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [43, 'px'], 'rgba(251,251,251,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            textStyle: ['', '', '75px', ''],
                            textShadow: ['rgba(0,0,0,0.65098)', 3, 3, 3],
                            rect: ['1181', '115px', '99px', '67px', 'auto', 'auto']
                        },
                        {
                            id: 'S26_G2',
                            type: 'image',
                            rect: ['74px', '136px', '901px', '501px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Azi%20Once_G/S26_G.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280', '769']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "index": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            userClass: 'scroll',
                            rect: ['0px', '62px', '367px', '706px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'indexListContainer',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0', '0px', '367px', '61', 'auto', 'auto'],
                            fill: ['rgba(143,107,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text3',
                            text: 'index',
                            align: 'left',
                            rect: ['21', '20', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'closeBtn',
                            rect: ['315px', '0px', '52px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closeBtn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "IndexItemSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '367px', '120px', 'auto', 'auto'],
                            opacity: '0.86991869918699',
                            id: 'bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,157,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'imageHolder',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['17px', '15px', '119px', '89px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)']
                        },
                        {
                            rect: ['147px', '38px', '208px', '24px', 'auto', 'auto'],
                            type: 'text',
                            id: 'titleText',
                            textStyle: ['', '', '20px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            text: 'Cervarix'
                        },
                        {
                            rect: ['147px', '62px', '208px', '42px', 'auto', 'auto'],
                            type: 'text',
                            id: 'bodyText',
                            textStyle: ['', '', '18px', ''],
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,36,135,1.00)', '300', 'none', '', 'break-word', ''],
                            text: 'Cover'
                        },
                        {
                            type: 'rect',
                            id: 'line',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '119px', '333px', '1px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Sections_Bar": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Navbar',
                            rect: ['0px', '6px', '1194px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navbar.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['173px', '5px', '178px', '61px', 'auto', 'auto'],
                            id: 'sec18',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S18_09.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            display: 'none',
                            id: 'Group2',
                            rect: ['-96', '-36', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['289px', '-83px', '101px', '129px', 'auto', 'auto'],
                                id: 'Menu_02',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['289px', '-83px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_02_Btn_04',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_02_Btn_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['289px', '-52px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_02_Btn_03',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_02_Btn_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['289px', '-19px', '101px', '31px', 'auto', 'auto'],
                                id: 'Menu_02_Btn_02',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_02_Btn_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'block',
                                rect: ['289px', '13px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_02_Btn_01',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_02_Btn_01.png', '0px', '0px']
                            },
                            {
                                type: 'rect',
                                rect: ['288px', '13px', '102px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M16',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['288px', '-19px', '102px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M17',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['288px', '-51px', '102px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M18',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['288px', '-83px', '102px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M19',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                cursor: 'pointer',
                                fill: ['rgba(192,192,192,0.00)']
                            }]
                        },
                        {
                            type: 'image',
                            rect: ['345px', '-1px', '178px', '65px', 'auto', 'auto'],
                            id: 'sec24',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S24_09.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['517px', '1px', '176px', '72px', 'auto', 'auto'],
                            id: 'sec27',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S27_04.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['693px', '9px', '154px', '62px', 'auto', 'auto'],
                            id: 'sec28',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S28_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['856px', '0px', '178px', '67px', 'auto', 'auto'],
                            id: 'sec29',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S29_03.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1037px', '9px', '151px', '61px', 'auto', 'auto'],
                            id: 'sec30',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S30_07.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['0px', '6px', '170px', '65px', 'auto', 'auto'],
                            id: 'sec02',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/S1_11.png', '0px', '0px']
                        },
                        {
                            type: 'group',
                            id: 'Group1',
                            cursor: 'pointer',
                            rect: ['-96', '-36', '0', '0', 'auto', 'auto'],
                            overflow: 'visible',
                            display: 'none',
                            c: [
                            {
                                rect: ['118px', '-117px', '101px', '162px', 'auto', 'auto'],
                                id: 'Menu_01',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-117px', '51px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_05',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-116px', '51px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_05_Btn1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_05_Btn1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-84px', '186px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_04',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['353px', '-84px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_04_Btn3',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_04_Btn3.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['303px', '-84px', '50px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_04_Btn2',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_04_Btn2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-84px', '85px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_04_Btn1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_04_Btn1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-50px', '203px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_03',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['371px', '-49px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_03_Btn4',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_03_Btn4.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['320px', '-49px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_03_Btn3',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_03_Btn3.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['268px', '-49px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_03_Btn2',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_03_Btn2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-50px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_03_Btn1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_03_Btn1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-19px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_02',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['269px', '-18px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_02_Btn2',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_02_Btn2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-18px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_02_Btn1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_02_Btn1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'block',
                                rect: ['218px', '-49px', '102px', '94px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['269px', '13px', '51px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01_Btn2',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01_Btn2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['269px', '-50px', '51px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01_Btn2_2',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01_Btn2_2.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['269px', '-18px', '50px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01_Btn2_1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01_Btn2_1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'block',
                                rect: ['218px', '13px', '51px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01_Btn1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01_Btn1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['218px', '-18px', '51px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_sub_01_Btn1_1',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_sub_01_Btn1_1.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['118px', '-116px', '101px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_Btn_05',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_Btn_05.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['118px', '-85px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_Btn_04',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_Btn_04.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['118px', '-50px', '101px', '31px', 'auto', 'auto'],
                                id: 'Menu_01_Btn_03',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_Btn_03.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'none',
                                rect: ['118px', '-19px', '101px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_Btn_02',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_Btn_02.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                display: 'block',
                                rect: ['118px', '13px', '100px', '32px', 'auto', 'auto'],
                                id: 'Menu_01_Btn_01',
                                fill: ['rgba(0,0,0,0)', 'images/Menu_01_Btn_01.png', '0px', '0px']
                            },
                            {
                                rect: ['119px', '14px', '100px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M1',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['219px', '14px', '49px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M1Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['219px', '-18px', '50px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['269px', '14px', '51px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['269px', '-18px', '51px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M4',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['269px', '-49px', '51px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['118px', '-18px', '100px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M6',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['219px', '-18px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M6Copy2',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['270px', '-19px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M7',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['118px', '-50px', '101px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M8',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['218px', '-50px', '51px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M8Copy2',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['268px', '-49px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M9',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['320px', '-49px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M10',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['372px', '-49px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M11',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['118px', '-84px', '101px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M12',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['218px', '-84px', '85px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M12Copy2',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['303px', '-84px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M13',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['354px', '-84px', '50px', '31px', 'auto', 'auto'],
                                display: 'block',
                                id: 'M14',
                                opacity: '0',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['119px', '-117px', '100px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M15',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            },
                            {
                                rect: ['218px', '-117px', '50px', '31px', 'auto', 'auto'],
                                opacity: '0',
                                id: 'M15Copy2',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1194px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 4750,
                    autoPlay: false,
                    data: [
                        [
                            "eid827",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid761",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid803",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid804",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid741",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid809",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_sub_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid834",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_Btn_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid751",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01}",
                            'block',
                            'block'
                        ],
                        [
                            "eid778",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_sub_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid832",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid755",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid789",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid792",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid762",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid805",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid806",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid759",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid790",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_sub_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Menu_01_sub_03}",
                            'block',
                            'block'
                        ],
                        [
                            "eid799",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_sub_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid831",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M12Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid764",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_05_Btn1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid808",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_sub_05_Btn1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid756",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid793",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid794",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid830",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid846",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Menu_02_Btn_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid841",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Menu_02_Btn_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid842",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Menu_02_Btn_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid748",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid774",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid775",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid836",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Group2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid814",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Group2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid825",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid750",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid772",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid773",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid752",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid779",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid840",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${Menu_02_Btn_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid824",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Group1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid740",
                            "display",
                            173,
                            0,
                            "linear",
                            "${Group1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid813",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${Group1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid743",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_Btn_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid786",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_Btn_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid812",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_Btn_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid848",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Menu_02_Btn_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid845",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Menu_02_Btn_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid826",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid758",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid797",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid798",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid800",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid802",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${Menu_01_sub_04_Btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid749",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid776",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid777",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn2_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_Btn_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid780",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_Btn_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid785",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_Btn_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid746",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn1_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn1_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid744",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_Btn_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid811",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_Btn_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid835",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_Btn_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid847",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Menu_02_Btn_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid843",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${Menu_02_Btn_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid844",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Menu_02_Btn_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid745",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_Btn_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid810",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_Btn_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid828",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid754",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid782",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Menu_01_sub_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid788",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_sub_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid829",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid763",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid801",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Menu_01_sub_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Menu_01_sub_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid757",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid795",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid796",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${Menu_01_sub_03_Btn3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid747",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid765",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Menu_01_sub_01_Btn1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid833",
                            "display",
                            250,
                            0,
                            "linear",
                            "${M14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid753",
                            "display",
                            250,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid784",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid787",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Menu_01_sub_02_Btn2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1824918922");
