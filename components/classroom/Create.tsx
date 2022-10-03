import { Button } from "@chakra-ui/react";
import { ChangeEventHandler, useRef } from "react";
import { StudentTable } from "./StudentTable";
import CSVReader from "react-csv-reader";

export const Create = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef?.current?.click();
  };
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    console.log("file:", file);
  };
  return (
    <>
      <label>
        <Button onClick={onClick}>ファイルテスト</Button>
        <input type="file" hidden ref={inputRef} onChange={handleFiles} />
      </label>
      <CSVReader
        onFileLoaded={(data, fileInfo) => console.dir(data, fileInfo)}
      />

      <StudentTable />
    </>
  );
};
