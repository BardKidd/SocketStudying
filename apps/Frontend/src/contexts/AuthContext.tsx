import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 用戶介面定義
interface User {
  id: string;
  name: string;
  email: string;
}

// 認證上下文介面定義
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

// 創建認證上下文
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider Props 介面
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider 組件：提供認證狀態管理
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 計算認證狀態
  const isAuthenticated = !!token && !!user;

  // 初始化時從 localStorage 讀取認證資訊
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('初始化認證狀態時發生錯誤:', error);
        // 清除可能損壞的資料
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // 登入函數：儲存 token 和用戶資訊
  const login = (newToken: string, newUser: User) => {
    try {
      setToken(newToken);
      setUser(newUser);
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('儲存認證資訊時發生錯誤:', error);
    }
  };

  // 登出函數：清除所有認證資訊
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth Hook：方便組件使用認證狀態
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth 必須在 AuthProvider 內部使用');
  }
  return context;
};