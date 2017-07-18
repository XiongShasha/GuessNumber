'use strict';

describe('pos', () => {

    it('4A0B', () => {
        const systemInputs = '1234';
        const userInputs='1234';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='4A0B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('0A0B', () => {
        const systemInputs = '1234';
        const userInputs='5555';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='0A0B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('1A0B', () => {
        const systemInputs = '1234';
        const userInputs='1555';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='1A0B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('2A0B', () => {
        const systemInputs = '1234';
        const userInputs='1255';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='2A0B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('3A0B', () => {
        const systemInputs = '1234';
        const userInputs='1235';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='3A0B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('0A1B', () => {
        const systemInputs = '1234';
        const userInputs='5155';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='0A1B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('0A2B', () => {
        const systemInputs = '1234';
        const userInputs='5125';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='0A2B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('0A3B', () => {
        const systemInputs = '1234';
        const userInputs='2345';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='0A3B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('0A4B', () => {
        const systemInputs = '1234';
        const userInputs='4123';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='0A4B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });it('1A1B', () => {
        const systemInputs = '1234';
        const userInputs='1355';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='1A1B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('1A2B', () => {
        const systemInputs = '1234';
        const userInputs='1325';
        spyOn(console, 'log');
        printFigure(systemInputs,userInputs);
        let expectString='1A2B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('1A3B', () => {
        const systemInputs = '1234';
        const userInputs='1423';
        spyOn(console, 'log');
        let getString=printFigure(systemInputs,userInputs);
        let expectString='1A3B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('2A1B', () => {
        const systemInputs = '1234';
        const userInputs='1253';
        spyOn(console, 'log');
        let getString=printFigure(systemInputs,userInputs);
        let expectString='2A1B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
    it('2A2B', () => {
        const systemInputs = '1234';
        const userInputs='1243';
        spyOn(console, 'log');
        let getString=printFigure(systemInputs,userInputs);
        let expectString='2A2B';
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
});