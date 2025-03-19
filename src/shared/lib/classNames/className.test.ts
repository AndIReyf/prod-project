import { classNames } from 'shared/lib';

describe('className', () => {
  test('Only cls class', () => {
    expect(classNames({ cls: 'test' })).toBe('test');
  });
  test('Cls and additional classes', () => {
    expect(classNames({ cls: 'test', additional: ['addClass'] })).toBe('test addClass');
    expect(classNames({ cls: 'test', additional: ['addClass1', 'addClass2'] }))
      .toBe('test addClass1 addClass2');
  });
  test('Cls, additional and mods classes', () => {
    expect(classNames({ cls: 'test', mods: { modClass: true }, additional: ['addClass'] }))
      .toBe('test addClass modClass');
    expect(classNames({
      cls: 'test',
      additional: ['addClass1'],
      mods: { modClass1: true, modClass2: true },
    }))
      .toBe('test addClass1 modClass1 modClass2');
    expect(classNames({
      cls: 'test',
      additional: ['addClass1'],
      mods: { modClass1: false, modClass2: true },
    }))
      .toBe('test addClass1 modClass2');
    expect(classNames({
      cls: 'test',
      additional: ['addClass1'],
      mods: { modClass1: true, modClass2: undefined },
    }))
      .toBe('test addClass1 modClass1');
    expect(classNames({
      cls: 'test',
      additional: ['addClass1'],
      mods: { modClass1: '', modClass2: undefined },
    }))
      .toBe('test addClass1');
  });
});
