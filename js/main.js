$(function () {

    // Preloader
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeOut();
    // $preloader.delay(350).fadeOut('slow');

    /* Параллакс от движения мыши */
    if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.ellipse',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -10,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.lines-dot',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -14,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': -10,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.plus-yellow',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 20,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -40,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.zero_two',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 9,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.triangles',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': -15,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            },
                                'y': {
                                'top': {
                                    'initial': 20,
                                    'multiplier': 0.002,
                                    'unit': '%',
                                    'invert': false
                                }
                            }
                        }
                    }
                },
                {
                    'selector': '.line-wave',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 15,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': true
                            },
                                'y': {
                                'top': {
                                    'initial': 0,
                                    'multiplier': 0.0015,
                                    'unit': '%',
                                    'invert': true
                                }
                            }
                        }
                    }
                },
                {
                    'selector': '.triangle',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 1,
                                'multiplier': 0.002,
                                'unit': 'vh',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 3,
                                'multiplier': 0.002,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.himiko_toga',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 13,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.syringe_big',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.syringe_small',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.patch_back',
                    'properties': {
                        'x': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.patch_front',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.butterfly_left',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.butterfly_right',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -52,
                                'multiplier': 0.0005,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.butterfly_behind',
                    'properties': {
                        'x': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': false
                            }
                        },
                        'y': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.shinobu_kocho',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 13,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.butterfly_behind2',
                    'properties': {
                        'x': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': true
                            }
                        },
                        'y': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.square',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 1,
                                'multiplier': 0.001,
                                'unit': 'vh',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 3,
                                'multiplier': 0.001,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.cross',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 1,
                                'multiplier': 0.002,
                                'unit': 'vh',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 3,
                                'multiplier': 0.002,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.nezuko_kamade',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 13,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.leaflet_big',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': 'vh',
                                'invert': true
                            }
                        }
                    }
                },
                 {
                    'selector': '.leaflet_top_eagle',
                    'properties': {
                        'x': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': true
                            }
                        },
                        'y': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': 'vh',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.leaflet_left',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': true
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0015,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.leaflet_red',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                 {
                    'selector': '.leaflet_behind',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.0005,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    };
});