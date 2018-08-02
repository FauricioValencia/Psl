import React, { Component } from 'react';

import Number from './number'

export default class LCDView extends Component {

    LcdLine1(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasTop(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    LcdLine2(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = Number.hasTopLeft(parseInt(next)) ? '|' : ' '
            var endChar = Number.hasTopRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}` + ' '
        }, '')
    }

    LcdLine3(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasMiddle(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    LcdLine4(size, num) {
        return num.reduce((prev, next) => {
            var beginChar = Number.hasBottomLeft(parseInt(next)) ? '|' : ' '
            var endChar = Number.hasBottomRight(parseInt(next)) ? '|' : ' '
            var text = Array(size + 1).join(' ')

            return `${prev}${beginChar}${text}${endChar}` + ' '
        }, '')
    }

    LcdLine5(size, num) {
        return num.reduce((prev, next) => {
            var char = Number.hasBottom(parseInt(next)) ? '-' : ' '
            var text = Array(size + 1).join(char)
            return `${prev} ${text} ` + ' '
        }, '')
    }

    getText() {
        var { lines } = this.props

        var textV = [];
        if(lines && typeof lines != 'undefined'){
            lines.forEach(line => {
                line = line.split(',');
                var size = parseInt(line[0])
                var number = line[1].split('');
    
                var lcd = [
                    this.LcdLine1(size, number),
                    ...[...Array(size)].map(() => this.LcdLine2(size, number)),
                    this.LcdLine3(size, number),
                    ...[...Array(size)].map(() => this.LcdLine4(size, number)),
                    this.LcdLine5(size, number),
                    ''
                ]
    
                textV = [
                    ...textV,
                    ...lcd
                ]
            });
    
            return textV.join('\n')
        }

    }

    render() {
        return (
            <pre>{this.getText()}</pre>
        );
    }
}