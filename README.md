# Bullseye jQuery Plugin

[Demo](http://mt.waly.me/bullseye) 

## Description
The concept is based on Panic’s implementation of these ‘bullseyes’ on their [Transmit Product Page](www.panic.com/transmit).  See the concept in action there.

## Installation
Download de plugin JS en CSS. Zet deze neer waar je wilt en include ze op de pagina waar je ze wilt gebruiken. Let op: Voordat je bullseye aanroept, moet je jQuery aanroepen.

## Parameters
| Property: value            | Explanation                                                                                 |
|----------------------------|---------------------------------------------------------------------------------------------|
| top: n                     | Where n is a number. Determines bullseye position from top.                          |
| right: n                   | Where n is a number. Determines bullseye position from the right.                        |
| bottom: n                  | Where n is a number. Determines bullseye position from the bottom.                          |
| left: n                    | Where n is a number. Determines dot position from the left.                         |
| heading: "Hello World"     | Determines heading content in tooltip.                                       |
| content: "This is content" | Determines paragraph content in tooltip.                                          |
| orientation: "top"         | Determines tooltip orientation. Default value is "top", also accepts "left", "right" and "bottom”. |
| color: "#ee2200"           | Determines dot and dot animation color. Accepts any valid HEX value and reverts to default if HEX value is invalid.                                                                                             |

## Syntax
	$(‘.yourElement’).bullseye({
   		top: 10,
   		right: 0,
   		heading: "Hello",
   		content: "World"
	});
