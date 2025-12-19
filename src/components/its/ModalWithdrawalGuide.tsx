import {
  XcDialog,
  XcDialogContent,
  XcDialogHeader,
  XcDialogTitle,
  XcDialogBody,
  XcDialogClose,
} from "@/components/xc/ui/XcDialog";
import XcButton from "@/components/xc/ui/XcButton";

interface ModalWithdrawalGuideProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModalWithdrawalGuide = ({
  open,
  onOpenChange,
}: ModalWithdrawalGuideProps) => {
  return (
    <XcDialog open={open} onOpenChange={onOpenChange}>
      <XcDialogContent className="withdrawal-wrap">
        <XcDialogHeader>
          <XcDialogTitle>회원 탈퇴 안내</XcDialogTitle>
        </XcDialogHeader>

        <XcDialogBody>
          <div className="withdrawal-box">
            <div className="title">[법적 근거]</div>
            <p>
              탈퇴 시에도 <span className="font-semibold">「개인정보보호법」</span> 및 <span className="font-semibold">「전자상거래 등에서의 소비자보호에 관한 법률」</span>에 따라
              모든 정보는 최소 3년에 최대 5년간 정보를 보관합니다.<br />
              예) 계약 관련 기록(5년), 소비자 불만 처리 기록(3년), 개인정보 동의 기반 정보(3년)
            </p>

            <div className="title">[보관 목적]</div>
            <p>
              탈퇴 후 발생할 수 있는 분쟁 해결, 법적 요구 대응, 서비스 개선, 통계 분석 등을 위해 제한적으로 활용됩니다.
            </p>

            <div className="title">[파기 시점]</div>
            <p>
              보관 기간이 만료되면 즉시 파기되며, 복구가 불가능합니다.
            </p>

            <div className="title">유의사항</div>
            <p className="text-[#EC4651]">회원정보는 탈퇴 즉시 삭제되며, 복구가 불가능 합니다.</p>
            <p className="text-[#EC4651]">탈퇴 시 동일한 ID로 회원가입이 불가합니다.</p>
            <p>성적서, ITS평가 신청정보는 탈퇴와 동시에 모든 정보가 즉시 삭제되지 않으며, 법적 보관 기간 내에는 접근 및 활용이 제한됩니다.</p>
            <p>탈퇴 후에도 보관 기간 동안 공식적인 요청(예: 정보 열람 청구)이 있을 경우, 관련 법률에 따라 제공할 수 있습니다.</p>

            <div className="mt-[16px] text-[#1D1D1D]">
              탈퇴 관련 문의는 대표전화(1350/유료, 평일 09시~18시) 또는<br />
              당직실(031-8098-6004/평일 18시~익일 09시, 주말ㆍ공휴일 24시)로 연락 주시기 바랍니다. 감사합니다.
            </div>
          </div>

          <div className="withdrawal-foot">
            <p>
              ITS성능평가 회원 탈퇴 하시겠습니까?
            </p>
            <div className="flex gap-[8px]">
              <XcButton variant="default">네</XcButton>
              <XcDialogClose>
                <XcButton variant="outline" className="text-[#717174] border-[#8E8E8E]">아니오</XcButton>
              </XcDialogClose>
            </div>
          </div>
        </XcDialogBody>
      </XcDialogContent>
    </XcDialog>
  );
};

export default ModalWithdrawalGuide;
