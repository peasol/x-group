import { useState, DragEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog"; 
import XcButton from "@/components/xc/ui/XcButton";
import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
  XcDialogFooter,
  XcDialogClose,
} from "@/components/xc/ui/XcDialog";

interface ModalFileUploadProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

const MAX_FILES = 5;
const MAX_SIZE = 20 * 1024 * 1024; // 20MB

export default function ModalFileUpload({ open, onOpenChange }: ModalFileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileAdd = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const arr = Array.from(newFiles);
    const merged = [...files, ...arr].slice(0, MAX_FILES);
    setFiles(merged);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileAdd(e.dataTransfer.files);
  };

  const removeFile = (idx: number) => {
    setFiles(prev => prev.filter((_, i) => i !== idx));
  };

  const clearAll = () => setFiles([]);

  return (
    <XcDialog open={open} onOpenChange={onOpenChange} modal={false}>
      
      <Dialog.Portal>

        {open && (
          <div 
            className="fixed inset-0 bg-black/50 z-[900]"
            aria-hidden="true"
          />
        )}

        <XcDialogContent className="file-upload-modal z-[1000]" onClose={async () => true}>
          
          <XcDialogHeader>
            <XcDialogTitle>첨부서류를 등록해 주세요.</XcDialogTitle>
          </XcDialogHeader>
          <Dialog.Description className="sr-only">
            첨부할 파일을 등록하거나 삭제할 수 있는 창입니다.
          </Dialog.Description>

          <XcDialogBody>
            <div
              className="drag-area"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <p>첨부할 파일을 여기에 끌어다 놓거나, 파일 선택 버튼을 직접 선택해주세요.</p>

              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept="*"
                  onChange={(e) => handleFileAdd(e.target.files)}
                />
                <span className="inline-flex items-center justify-center bg-[#246BEB] w-[91px] h-[48px] rounded-[4px] text-white text-[17px]">
                  파일선택
                </span>
              </label>
            </div>

            <div className="file-list">
              <div className="flex justify-between items-center">
                <span className="text-[17px] font-bold">
                  <span className="text-[#1D56BC]">{files.length}개</span> / 5개
                </span>

                <button onClick={clearAll} className="btn-delete">
                  <i className="ic-delete"></i><span>전체 파일 삭제</span>
                </button>
              </div>

              <div className="flex flex-col gap-[16px]">
                {files.map((file, idx) => {
                  const tooLarge = file.size > MAX_SIZE;

                  return (
                    <div key={idx} className="file-item-wrapper">
                      <div className={`files ${tooLarge ? "limit-error" : ""}`}>
                        <div>
                          <span className="file-name">{file.name}</span>
                          <button
                            onClick={() => removeFile(idx)}
                            className="btn-delete"
                          >
                            <i className="ic-delete"></i><span>삭제</span>
                          </button>
                        </div>

                        {tooLarge && (
                          <div className="limit-box">
                            <i></i>
                            <p className="limit-text">
                              등록 가능한 파일 용량을 초과하였습니다.<br />
                              20MB 미만의 파일만 등록할 수 있습니다.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </XcDialogBody>

          <XcDialogFooter>
            <XcDialogClose onClose={async () => true}>
              <XcButton variant="outline" size="lg">취소하기</XcButton>
            </XcDialogClose>
            <XcDialogClose>
              <XcButton variant="default" size="lg">저장 및 신청</XcButton>
            </XcDialogClose>
          </XcDialogFooter>

        </XcDialogContent>
      </Dialog.Portal>
    </XcDialog>
  );
}
