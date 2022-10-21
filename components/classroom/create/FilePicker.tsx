import { Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { FileText, X } from "phosphor-react";
import { FC } from "react";
import { useCSVReader } from "react-papaparse";

type props = {
  onUpload: (data: any) => void;
};
export const FilePicker: FC<props> = ({ onUpload }) => {
  const { CSVReader } = useCSVReader();
  return (
    <CSVReader onUploadAccepted={(result: any) => onUpload(result.data)}>
      {({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
        <>
          <Button {...getRootProps()} w="full">
            ファイルを選択
          </Button>
          {acceptedFile && (
            <Flex
              mt={3}
              justifyContent="space-between"
              alignItems="center"
              px={3}
              py={1}
              border="1px"
              borderColor="gray.300"
              rounded="md"
            >
              <Flex color="gray.500" alignItems="center" gap={3}>
                <Box>
                  <FileText size={18} />
                </Box>
                <Text fontSize={14}>{acceptedFile?.name}</Text>
              </Flex>
              <IconButton
                colorScheme="gray"
                color="gray.500"
                variant="ghost"
                icon={<X />}
                size="sm"
                aria-label="削除"
                rounded="full"
                {...getRemoveFileProps()}
              />
            </Flex>
          )}
        </>
      )}
    </CSVReader>
  );
};
