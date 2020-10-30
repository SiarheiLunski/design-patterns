import React, { useEffect, useState } from 'react';
import { GUIAbstractFactory, PlatformButton } from '../patterns/creational/abstract-factory';
import { WinUIFactory } from '../patterns/creational/abstract-factory/WinUIFactory';
import { MacUIFactory } from '../patterns/creational/abstract-factory/MacUIFactory';

const PLATFORM_TYPES = {
  MACOS: 'MACOS',
  WINDOWS: 'WINDOWS',
};

export default function AbstractFactoryPage(): JSX.Element {
  const [platform, setPlatform] = useState(PLATFORM_TYPES.MACOS);
  const [factory, setFactory] = useState<GUIAbstractFactory | null>(null);
  const [buttons, setButtons] = useState<PlatformButton[]>([]);

  useEffect(() => {
    switch (platform) {
      case PLATFORM_TYPES.MACOS: {
        setFactory(new MacUIFactory());
        break;
      }
      case PLATFORM_TYPES.WINDOWS: {
        setFactory(new WinUIFactory());
        break;
      }
      default: throw new Error('Unsupported platform');
    }
  }, [platform]);

  const createUI = () => {
    if (factory) {
      const newButton = factory?.createButton();
      setButtons([...buttons, newButton]);
    }
  };

  return (
    <div>
      <h1>Abstract Factory</h1>
      <div>
        <select name="platforms" id="platform-list" onChange={(e) => setPlatform(e.target.value)}>
          <option value={PLATFORM_TYPES.MACOS}>{PLATFORM_TYPES.MACOS}</option>
          <option value={PLATFORM_TYPES.WINDOWS}>{PLATFORM_TYPES.WINDOWS}</option>
        </select>
        <button type="button" onClick={createUI} defaultValue={platform}>Create UI</button>
      </div>
      <div>
        Items:
        {buttons.map(button => button.paint())}
      </div>
    </div>
  );
}