'use client';

import { useEffect, useRef, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import HeaderLogo from './HeaderLogo';

import { safeSessionStorage } from '@toss/storage';

export default function Header() {
  const [modal, setModal] = useState<HTMLDialogElement | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [value, setValue] = useState({
    baseURL: safeSessionStorage.get('baseURL'),
    'X-M2M-RI': safeSessionStorage.get('X-M2M-RI'),
    'X-M2M-Origin': safeSessionStorage.get('X-M2M-Origin'),
    'X-M2M-RVI': safeSessionStorage.get('X-M2M-RVI'),
    interval: safeSessionStorage.get('interval'),
  });

  const onChangeValue = (key: string, value: string) => {
    setValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onClickSave = () => {
    try {
      if (value.baseURL) {
        safeSessionStorage.set('baseURL', value.baseURL);
      }
      if (value['X-M2M-RI']) {
        safeSessionStorage.set('X-M2M-RI', value['X-M2M-RI']);
      }
      if (value['X-M2M-Origin']) {
        safeSessionStorage.set('X-M2M-Origin', value['X-M2M-Origin']);
      }
      if (value['X-M2M-RVI']) {
        safeSessionStorage.set('X-M2M-RVI', value['X-M2M-RVI']);
      }
      if (value['interval']) {
        safeSessionStorage.set('interval', value['interval']);
      }
      modalRef.current?.close();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setModal(document.getElementById('my_modal_1') as HTMLDialogElement);
  }, []);

  return (
    <>
      <div className="w-full border-b border-gray-200">
  <header className="navbar z-50 flex h-[90px] w-full justify-between bg-white px-4">
   
    <div className="flex items-center gap-[17px]">
      <HeaderLogo />
    </div>
   
    <div className="flex items-center">
      <IoMdSettings
        className="h-8 w-8 cursor-pointer hover:text-gray-600"
        onClick={() => modal?.showModal()}
      />
    </div>
  </header>
</div>

      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">Setting</h3>
          <div className="flex flex-col gap-2 py-4">
            <label className="input input-bordered flex items-center gap-2">
              baseURL
              <input
                type="text"
                className="grow"
                placeholder="http://localhost:3000"
                value={value.baseURL ?? ''}
                onChange={(e) => onChangeValue('baseURL', e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              X-M2M-RI
              <input
                type="text"
                className="grow"
                placeholder="12345"
                value={value['X-M2M-RI'] ?? ''}
                onChange={(e) => onChangeValue('X-M2M-RI', e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              X-M2M-Origin
              <input
                type="text"
                className="grow"
                placeholder="CAdmin"
                value={value['X-M2M-Origin'] ?? ''}
                onChange={(e) => onChangeValue('X-M2M-Origin', e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              X-M2M-RVI
              <input
                type="text"
                className="grow"
                placeholder="2a"
                value={value['X-M2M-RVI'] ?? ''}
                onChange={(e) => onChangeValue('X-M2M-RVI', e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              API Request Interval(ms)
              <input
                type="text"
                className="grow"
                placeholder="2a"
                value={value['interval'] ?? ''}
                onChange={(e) => onChangeValue('interval', e.target.value)}
              />
            </label>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={onClickSave}>
              Save
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
