import * as bcrypt from 'bcrypt';

/**
 * Generate salt
 * @returns {String} salt
 */
export const genSalt = async () => {
  const salt = await bcrypt.genSalt();
  return salt;
};

/**
 * Generates hash
 * @param string
 * @returns {String} hash
 */
export const generateHash = async (string: string): Promise<string> => {
  const hash = await bcrypt.hash(string, '$2b$10$fxaG/y7OOJmMA5fw1Ylleu');
  return hash;
};
