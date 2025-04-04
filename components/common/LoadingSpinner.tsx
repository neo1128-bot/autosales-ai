// 在 GitHub 中創建 components/common/LoadingSpinner.tsx
export const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// 在 GitHub 中創建 components/common/ErrorMessage.tsx
export const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-red-50 text-red-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">錯誤</h2>
      <p>{message}</p>
    </div>
  </div>
);

// 在 GitHub 中創建 components/common/ActionButton.tsx
interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
}

export const ActionButton = ({
  children,
  onClick,
  disabled,
  loading,
  primary
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-4 py-2 rounded-lg transition-all
      ${primary 
        ? 'bg-primary text-white hover:bg-primary-dark' 
        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
  >
    {loading ? (
      <span className="flex items-center">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        處理中...
      </span>
    ) : children}
  </button>
);
