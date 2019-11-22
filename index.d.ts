/**
 * Supported license types
 */
type LicenseType =
  | 'agpl'
  | 'apache'
  | 'artistic'
  | 'bsd-3-clause'
  | 'bsd'
  | 'cc0'
  | 'eclipse'
  | 'gpl-v2'
  | 'gpl-v3'
  | 'isc'
  | 'lgpl-v2.1'
  | 'lgpl-v3'
  | 'mit'
  | 'mozilla'
  | 'no-license'
  | 'unlicense'
  | 'wtfpl'

/**
 * Create license options
 * @property year years
 * @property author author
 * @property project project name
 */
type Options = {
  year: number
  author: string
  project: string
}

/**
 * Create a license
 * @param where Directory for creating licenses
 * @param type Type of license
 * @param opts Some options
 */
export default function createLicense(
  where: string,
  type: LicenseType,
  opts: Options,
): void

/**
 * Get a list of all supported licenses
 */
export const licenses: [
  'agpl',
  'apache',
  'artistic',
  'bsd-3-clause',
  'bsd',
  'cc0',
  'eclipse',
  'gpl-v2',
  'gpl-v3',
  'isc',
  'lgpl-v2.1',
  'lgpl-v3',
  'mit',
  'mozilla',
  'no-license',
  'unlicense',
  'wtfpl',
]
