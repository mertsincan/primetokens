import { execSync } from 'child_process';

export function cmd(command: string, errorHandler?: (error: unknown) => void): void {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error: unknown) {
        errorHandler?.(error);
    }
}
