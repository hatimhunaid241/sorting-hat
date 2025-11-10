/**
 * Token types for formula parsing
 */

export type TokenType = 'number' | 'operator' | 'subject' | 'variable';

export interface BaseToken {
    valueType: TokenType;
}

export interface NumberToken extends BaseToken {
    valueType: 'number';
    value: number;
}

export interface OperatorToken extends BaseToken {
    valueType: 'operator';
    operator: '+' | '-' | '*' | '/';
}

export interface SubjectToken extends BaseToken {
    valueType: 'subject';
    subject: string;
}

export interface VariableToken extends BaseToken {
    valueType: 'variable';
    name: string; // Variable name like ELEC1, ELEC2, etc.
    includeCategories?: string[];
    excludeCategories?: string[];
    includeSubCategories?: string[];
    excludeSubCategories?: string[];
    includeSubjects?: string[];
    excludeSubjects?: string[];
    excludeSelf?: string[];
}

export type Token = NumberToken | OperatorToken | SubjectToken | VariableToken;
export type TokenGroup = Token[] | Token[][];
