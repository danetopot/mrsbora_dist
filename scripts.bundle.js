
/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

(function( global, factory ) {

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper window is present,
        // execute the factory and get jQuery
        // For environments that do not inherently posses a window with a document
        // (such as Node.js), expose a jQuery-making factory as module.exports
        // This accentuates the need for the creation of a real window
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

    var deletedIds = [];

    var slice = deletedIds.slice;

    var concat = deletedIds.concat;

    var push = deletedIds.push;

    var indexOf = deletedIds.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var support = {};



    var
        version = "1.11.1",

    // Define a local copy of jQuery
        jQuery = function( selector, context ) {
            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init( selector, context );
        },

    // Support: Android<4.1, IE<9
    // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

    // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

    // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function( all, letter ) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // Start with an empty selector
        selector: "",

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function() {
            return slice.call( this );
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function( num ) {
            return num != null ?

                // Return just the one element from the set
                ( num < 0 ? this[ num + this.length ] : this[ num ] ) :

                // Return all the elements in a clean array
                slice.call( this );
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function( elems ) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge( this.constructor(), elems );

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function( callback, args ) {
            return jQuery.each( this, callback, args );
        },

        map: function( callback ) {
            return this.pushStack( jQuery.map(this, function( elem, i ) {
                return callback.call( elem, i, elem );
            }));
        },

        slice: function() {
            return this.pushStack( slice.apply( this, arguments ) );
        },

        first: function() {
            return this.eq( 0 );
        },

        last: function() {
            return this.eq( -1 );
        },

        eq: function( i ) {
            var len = this.length,
                j = +i + ( i < 0 ? len : 0 );
            return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
        },

        end: function() {
            return this.prevObject || this.constructor(null);
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: deletedIds.sort,
        splice: deletedIds.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if ( typeof target === "boolean" ) {
            deep = target;

            // skip the boolean and the target
            target = arguments[ i ] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
            target = {};
        }

        // extend jQuery itself if only one argument is passed
        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[ name ] = jQuery.extend( deep, clone, copy );

                        // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function( msg ) {
            throw new Error( msg );
        },

        noop: function() {},

        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        isFunction: function( obj ) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray || function( obj ) {
            return jQuery.type(obj) === "array";
        },

        isWindow: function( obj ) {
            /* jshint eqeqeq: false */
            return obj != null && obj == obj.window;
        },

        isNumeric: function( obj ) {
            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
        },

        isEmptyObject: function( obj ) {
            var name;
            for ( name in obj ) {
                return false;
            }
            return true;
        },

        isPlainObject: function( obj ) {
            var key;

            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
                return false;
            }

            try {
                // Not own constructor property must be Object
                if ( obj.constructor &&
                    !hasOwn.call(obj, "constructor") &&
                    !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
                    return false;
                }
            } catch ( e ) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                return false;
            }

            // Support: IE<9
            // Handle iteration over inherited properties before own properties.
            if ( support.ownLast ) {
                for ( key in obj ) {
                    return hasOwn.call( obj, key );
                }
            }

            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.
            for ( key in obj ) {}

            return key === undefined || hasOwn.call( obj, key );
        },

        type: function( obj ) {
            if ( obj == null ) {
                return obj + "";
            }
            return typeof obj === "object" || typeof obj === "function" ?
            class2type[ toString.call(obj) ] || "object" :
                typeof obj;
        },

        // Evaluates a script in a global context
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        globalEval: function( data ) {
            if ( data && jQuery.trim( data ) ) {
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                ( window.execScript || function( data ) {
                    window[ "eval" ].call( window, data );
                } )( data );
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function( string ) {
            return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
        },

        nodeName: function( elem, name ) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        // args is for internal usage only
        each: function( obj, callback, args ) {
            var value,
                i = 0,
                length = obj.length,
                isArray = isArraylike( obj );

            if ( args ) {
                if ( isArray ) {
                    for ( ; i < length; i++ ) {
                        value = callback.apply( obj[ i ], args );

                        if ( value === false ) {
                            break;
                        }
                    }
                } else {
                    for ( i in obj ) {
                        value = callback.apply( obj[ i ], args );

                        if ( value === false ) {
                            break;
                        }
                    }
                }

                // A special, fast, case for the most common use of each
            } else {
                if ( isArray ) {
                    for ( ; i < length; i++ ) {
                        value = callback.call( obj[ i ], i, obj[ i ] );

                        if ( value === false ) {
                            break;
                        }
                    }
                } else {
                    for ( i in obj ) {
                        value = callback.call( obj[ i ], i, obj[ i ] );

                        if ( value === false ) {
                            break;
                        }
                    }
                }
            }

            return obj;
        },

        // Support: Android<4.1, IE<9
        trim: function( text ) {
            return text == null ?
                "" :
                ( text + "" ).replace( rtrim, "" );
        },

        // results is for internal usage only
        makeArray: function( arr, results ) {
            var ret = results || [];

            if ( arr != null ) {
                if ( isArraylike( Object(arr) ) ) {
                    jQuery.merge( ret,
                        typeof arr === "string" ?
                            [ arr ] : arr
                    );
                } else {
                    push.call( ret, arr );
                }
            }

            return ret;
        },

        inArray: function( elem, arr, i ) {
            var len;

            if ( arr ) {
                if ( indexOf ) {
                    return indexOf.call( arr, elem, i );
                }

                len = arr.length;
                i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

                for ( ; i < len; i++ ) {
                    // Skip accessing in sparse arrays
                    if ( i in arr && arr[ i ] === elem ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        merge: function( first, second ) {
            var len = +second.length,
                j = 0,
                i = first.length;

            while ( j < len ) {
                first[ i++ ] = second[ j++ ];
            }

            // Support: IE<9
            // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
            if ( len !== len ) {
                while ( second[j] !== undefined ) {
                    first[ i++ ] = second[ j++ ];
                }
            }

            first.length = i;

            return first;
        },

        grep: function( elems, callback, invert ) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for ( ; i < length; i++ ) {
                callbackInverse = !callback( elems[ i ], i );
                if ( callbackInverse !== callbackExpect ) {
                    matches.push( elems[ i ] );
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function( elems, callback, arg ) {
            var value,
                i = 0,
                length = elems.length,
                isArray = isArraylike( elems ),
                ret = [];

            // Go through the array, translating each of the items to their new values
            if ( isArray ) {
                for ( ; i < length; i++ ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }

                // Go through every key on the object,
            } else {
                for ( i in elems ) {
                    value = callback( elems[ i ], i, arg );

                    if ( value != null ) {
                        ret.push( value );
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply( [], ret );
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function( fn, context ) {
            var args, proxy, tmp;

            if ( typeof context === "string" ) {
                tmp = fn[ context ];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if ( !jQuery.isFunction( fn ) ) {
                return undefined;
            }

            // Simulated bind
            args = slice.call( arguments, 2 );
            proxy = function() {
                return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        now: function() {
            return +( new Date() );
        },

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

// Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });

    function isArraylike( obj ) {
        var length = obj.length,
            type = jQuery.type( obj );

        if ( type === "function" || jQuery.isWindow( obj ) ) {
            return false;
        }

        if ( obj.nodeType === 1 && length ) {
            return true;
        }

        return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var Sizzle =
        /*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
        (function( window ) {

            var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,

            // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,

            // Instance-specific data
                expando = "sizzle" + -(new Date()),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function( a, b ) {
                    if ( a === b ) {
                        hasDuplicate = true;
                    }
                    return 0;
                },

            // General-purpose constants
                strundefined = typeof undefined,
                MAX_NEGATIVE = 1 << 31,

            // Instance methods
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
            // Use a stripped-down indexOf if we can't use a native one
                indexOf = arr.indexOf || function( elem ) {
                        var i = 0,
                            len = this.length;
                        for ( ; i < len; i++ ) {
                            if ( this[i] === elem ) {
                                return i;
                            }
                        }
                        return -1;
                    },

                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

            // Regular expressions

            // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]",
            // http://www.w3.org/TR/css3-syntax/#characters
                characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

            // Loosely modeled on CSS identifier characters
            // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
            // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = characterEncoding.replace( "w", "w#" ),

            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
                        // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace +
                        // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",

                pseudos = ":(" + characterEncoding + ")(?:\\((" +
                        // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                        // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                        // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                        // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",

            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

                rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
                rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

                rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

                rpseudo = new RegExp( pseudos ),
                ridentifier = new RegExp( "^" + identifier + "$" ),

                matchExpr = {
                    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
                    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
                    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
                    "ATTR": new RegExp( "^" + attributes ),
                    "PSEUDO": new RegExp( "^" + pseudos ),
                    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                    "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                    "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
                    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
                },

                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,

                rnative = /^[^{]+\{\s*\[native \w/,

            // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                rsibling = /[+~]/,
                rescape = /'|\\/g,

            // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
                funescape = function( _, escaped, escapedWhitespace ) {
                    var high = "0x" + escaped - 0x10000;
                    // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ?
                        escaped :
                        high < 0 ?
                            // BMP codepoint
                            String.fromCharCode( high + 0x10000 ) :
                            // Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
                };

// Optimize for push.apply( _, NodeList )
            try {
                push.apply(
                    (arr = slice.call( preferredDoc.childNodes )),
                    preferredDoc.childNodes
                );
                // Support: Android<4.0
                // Detect silently failing push.apply
                arr[ preferredDoc.childNodes.length ].nodeType;
            } catch ( e ) {
                push = { apply: arr.length ?

                    // Leverage slice if possible
                    function( target, els ) {
                        push_native.apply( target, slice.call(els) );
                    } :

                    // Support: IE<9
                    // Otherwise append directly
                    function( target, els ) {
                        var j = target.length,
                            i = 0;
                        // Can't trust NodeList.length
                        while ( (target[j++] = els[i++]) ) {}
                        target.length = j - 1;
                    }
                };
            }

            function Sizzle( selector, context, results, seed ) {
                var match, elem, m, nodeType,
                // QSA vars
                    i, groups, old, nid, newContext, newSelector;

                if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
                    setDocument( context );
                }

                context = context || document;
                results = results || [];

                if ( !selector || typeof selector !== "string" ) {
                    return results;
                }

                if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
                    return [];
                }

                if ( documentIsHTML && !seed ) {

                    // Shortcuts
                    if ( (match = rquickExpr.exec( selector )) ) {
                        // Speed-up: Sizzle("#ID")
                        if ( (m = match[1]) ) {
                            if ( nodeType === 9 ) {
                                elem = context.getElementById( m );
                                // Check parentNode to catch when Blackberry 4.6 returns
                                // nodes that are no longer in the document (jQuery #6963)
                                if ( elem && elem.parentNode ) {
                                    // Handle the case where IE, Opera, and Webkit return items
                                    // by name instead of ID
                                    if ( elem.id === m ) {
                                        results.push( elem );
                                        return results;
                                    }
                                } else {
                                    return results;
                                }
                            } else {
                                // Context is not a document
                                if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
                                    contains( context, elem ) && elem.id === m ) {
                                    results.push( elem );
                                    return results;
                                }
                            }

                            // Speed-up: Sizzle("TAG")
                        } else if ( match[2] ) {
                            push.apply( results, context.getElementsByTagName( selector ) );
                            return results;

                            // Speed-up: Sizzle(".CLASS")
                        } else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
                            push.apply( results, context.getElementsByClassName( m ) );
                            return results;
                        }
                    }

                    // QSA path
                    if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
                        nid = old = expando;
                        newContext = context;
                        newSelector = nodeType === 9 && selector;

                        // qSA works strangely on Element-rooted queries
                        // We can work around this by specifying an extra ID on the root
                        // and working up from there (Thanks to Andrew Dupont for the technique)
                        // IE 8 doesn't work on object elements
                        if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
                            groups = tokenize( selector );

                            if ( (old = context.getAttribute("id")) ) {
                                nid = old.replace( rescape, "\\$&" );
                            } else {
                                context.setAttribute( "id", nid );
                            }
                            nid = "[id='" + nid + "'] ";

                            i = groups.length;
                            while ( i-- ) {
                                groups[i] = nid + toSelector( groups[i] );
                            }
                            newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
                            newSelector = groups.join(",");
                        }

                        if ( newSelector ) {
                            try {
                                push.apply( results,
                                    newContext.querySelectorAll( newSelector )
                                );
                                return results;
                            } catch(qsaError) {
                            } finally {
                                if ( !old ) {
                                    context.removeAttribute("id");
                                }
                            }
                        }
                    }
                }

                // All others
                return select( selector.replace( rtrim, "$1" ), context, results, seed );
            }

            /**
             * Create key-value caches of limited size
             * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
             *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *	deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache( key, value ) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if ( keys.push( key + " " ) > Expr.cacheLength ) {
                        // Only keep the most recent entries
                        delete cache[ keys.shift() ];
                    }
                    return (cache[ key + " " ] = value);
                }
                return cache;
            }

            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction( fn ) {
                fn[ expando ] = true;
                return fn;
            }

            /**
             * Support testing using an element
             * @param {Function} fn Passed the created div and expects a boolean result
             */
            function assert( fn ) {
                var div = document.createElement("div");

                try {
                    return !!fn( div );
                } catch (e) {
                    return false;
                } finally {
                    // Remove from its parent by default
                    if ( div.parentNode ) {
                        div.parentNode.removeChild( div );
                    }
                    // release memory in IE
                    div = null;
                }
            }

            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle( attrs, handler ) {
                var arr = attrs.split("|"),
                    i = attrs.length;

                while ( i-- ) {
                    Expr.attrHandle[ arr[i] ] = handler;
                }
            }

            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck( a, b ) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        ( ~b.sourceIndex || MAX_NEGATIVE ) -
                        ( ~a.sourceIndex || MAX_NEGATIVE );

                // Use IE sourceIndex if available on both nodes
                if ( diff ) {
                    return diff;
                }

                // Check if b follows a
                if ( cur ) {
                    while ( (cur = cur.nextSibling) ) {
                        if ( cur === b ) {
                            return -1;
                        }
                    }
                }

                return a ? 1 : -1;
            }

            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo( type ) {
                return function( elem ) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo( type ) {
                return function( elem ) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo( fn ) {
                return markFunction(function( argument ) {
                    argument = +argument;
                    return markFunction(function( seed, matches ) {
                        var j,
                            matchIndexes = fn( [], seed.length, argument ),
                            i = matchIndexes.length;

                        // Match elements found at the specified indexes
                        while ( i-- ) {
                            if ( seed[ (j = matchIndexes[i]) ] ) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext( context ) {
                return context && typeof context.getElementsByTagName !== strundefined && context;
            }

// Expose support vars for convenience
            support = Sizzle.support = {};

            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function( elem ) {
                // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };

            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function( node ) {
                var hasCompare,
                    doc = node ? node.ownerDocument || node : preferredDoc,
                    parent = doc.defaultView;

                // If no document and documentElement is available, return
                if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
                    return document;
                }

                // Set our document
                document = doc;
                docElem = doc.documentElement;

                // Support tests
                documentIsHTML = !isXML( doc );

                // Support: IE>8
                // If iframe document is assigned to "document" variable and if iframe has been reloaded,
                // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
                // IE6-8 do not support the defaultView property so parent will be undefined
                if ( parent && parent !== parent.top ) {
                    // IE11 does not have attachEvent, so all must suffer
                    if ( parent.addEventListener ) {
                        parent.addEventListener( "unload", function() {
                            setDocument();
                        }, false );
                    } else if ( parent.attachEvent ) {
                        parent.attachEvent( "onunload", function() {
                            setDocument();
                        });
                    }
                }

                /* Attributes
                 ---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
                support.attributes = assert(function( div ) {
                    div.className = "i";
                    return !div.getAttribute("className");
                });

                /* getElement(s)By*
                 ---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function( div ) {
                    div.appendChild( doc.createComment("") );
                    return !div.getElementsByTagName("*").length;
                });

                // Check if getElementsByClassName can be trusted
                support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) {
                    div.innerHTML = "<div class='a'></div><div class='a i'></div>";

                    // Support: Safari<4
                    // Catch class over-caching
                    div.firstChild.className = "i";
                    // Support: Opera<10
                    // Catch gEBCN failure to find non-leading classes
                    return div.getElementsByClassName("i").length === 2;
                });

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function( div ) {
                    docElem.appendChild( div ).id = expando;
                    return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
                });

                // ID find and filter
                if ( support.getById ) {
                    Expr.find["ID"] = function( id, context ) {
                        if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
                            var m = context.getElementById( id );
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            return m && m.parentNode ? [ m ] : [];
                        }
                    };
                    Expr.filter["ID"] = function( id ) {
                        var attrId = id.replace( runescape, funescape );
                        return function( elem ) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                } else {
                    // Support: IE6/7
                    // getElementById is not reliable as a find shortcut
                    delete Expr.find["ID"];

                    Expr.filter["ID"] =  function( id ) {
                        var attrId = id.replace( runescape, funescape );
                        return function( elem ) {
                            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };
                }

                // Tag
                Expr.find["TAG"] = support.getElementsByTagName ?
                    function( tag, context ) {
                        if ( typeof context.getElementsByTagName !== strundefined ) {
                            return context.getElementsByTagName( tag );
                        }
                    } :
                    function( tag, context ) {
                        var elem,
                            tmp = [],
                            i = 0,
                            results = context.getElementsByTagName( tag );

                        // Filter out possible comments
                        if ( tag === "*" ) {
                            while ( (elem = results[i++]) ) {
                                if ( elem.nodeType === 1 ) {
                                    tmp.push( elem );
                                }
                            }

                            return tmp;
                        }
                        return results;
                    };

                // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
                    if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
                        return context.getElementsByClassName( className );
                    }
                };

                /* QSA/matchesSelector
                 ---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See http://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function( div ) {
                        // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // http://bugs.jquery.com/ticket/12359
                        div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

                        // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if ( div.querySelectorAll("[msallowclip^='']").length ) {
                            rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
                        }

                        // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if ( !div.querySelectorAll("[selected]").length ) {
                            rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
                        }

                        // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if ( !div.querySelectorAll(":checked").length ) {
                            rbuggyQSA.push(":checked");
                        }
                    });

                    assert(function( div ) {
                        // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = doc.createElement("input");
                        input.setAttribute( "type", "hidden" );
                        div.appendChild( input ).setAttribute( "name", "D" );

                        // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if ( div.querySelectorAll("[name=d]").length ) {
                            rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
                        }

                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if ( !div.querySelectorAll(":enabled").length ) {
                            rbuggyQSA.push( ":enabled", ":disabled" );
                        }

                        // Opera 10-11 does not throw on post-comma invalid pseudos
                        div.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }

                if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector) )) ) {

                    assert(function( div ) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call( div, "div" );

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call( div, "[s!='']:x" );
                        rbuggyMatches.push( "!=", pseudos );
                    });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
                rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

                /* Contains
                 ---------------------------------------------------------------------- */
                hasCompare = rnative.test( docElem.compareDocumentPosition );

                // Element contains another
                // Purposefully does not implement inclusive descendent
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test( docElem.contains ) ?
                    function( a, b ) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!( bup && bup.nodeType === 1 && (
                            adown.contains ?
                                adown.contains( bup ) :
                            a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                        ));
                    } :
                    function( a, b ) {
                        if ( b ) {
                            while ( (b = b.parentNode) ) {
                                if ( b === a ) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };

                /* Sorting
                 ---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare ?
                    function( a, b ) {

                        // Flag for duplicate removal
                        if ( a === b ) {
                            hasDuplicate = true;
                            return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if ( compare ) {
                            return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
                            a.compareDocumentPosition( b ) :

                            // Otherwise we know they are disconnected
                            1;

                        // Disconnected nodes
                        if ( compare & 1 ||
                            (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

                            // Choose the first element that is related to our preferred document
                            if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
                                return -1;
                            }
                            if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
                                return 1;
                            }

                            // Maintain original order
                            return sortInput ?
                                ( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
                                0;
                        }

                        return compare & 4 ? -1 : 1;
                    } :
                    function( a, b ) {
                        // Exit early if the nodes are identical
                        if ( a === b ) {
                            hasDuplicate = true;
                            return 0;
                        }

                        var cur,
                            i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [ a ],
                            bp = [ b ];

                        // Parentless nodes are either documents or disconnected
                        if ( !aup || !bup ) {
                            return a === doc ? -1 :
                                b === doc ? 1 :
                                    aup ? -1 :
                                        bup ? 1 :
                                            sortInput ?
                                                ( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
                                                0;

                            // If the nodes are siblings, we can do a quick check
                        } else if ( aup === bup ) {
                            return siblingCheck( a, b );
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ( (cur = cur.parentNode) ) {
                            ap.unshift( cur );
                        }
                        cur = b;
                        while ( (cur = cur.parentNode) ) {
                            bp.unshift( cur );
                        }

                        // Walk down the tree looking for a discrepancy
                        while ( ap[i] === bp[i] ) {
                            i++;
                        }

                        return i ?
                            // Do a sibling check if the nodes have a common ancestor
                            siblingCheck( ap[i], bp[i] ) :

                            // Otherwise nodes in our document sort first
                            ap[i] === preferredDoc ? -1 :
                                bp[i] === preferredDoc ? 1 :
                                    0;
                    };

                return doc;
            };

            Sizzle.matches = function( expr, elements ) {
                return Sizzle( expr, null, null, elements );
            };

            Sizzle.matchesSelector = function( elem, expr ) {
                // Set document vars if needed
                if ( ( elem.ownerDocument || elem ) !== document ) {
                    setDocument( elem );
                }

                // Make sure that attribute selectors are quoted
                expr = expr.replace( rattributeQuotes, "='$1']" );

                if ( support.matchesSelector && documentIsHTML &&
                    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
                    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

                    try {
                        var ret = matches.call( elem, expr );

                        // IE 9's matchesSelector returns false on disconnected nodes
                        if ( ret || support.disconnectedMatch ||
                                // As well, disconnected nodes are said to be in a document
                                // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11 ) {
                            return ret;
                        }
                    } catch(e) {}
                }

                return Sizzle( expr, document, null, [ elem ] ).length > 0;
            };

            Sizzle.contains = function( context, elem ) {
                // Set document vars if needed
                if ( ( context.ownerDocument || context ) !== document ) {
                    setDocument( context );
                }
                return contains( context, elem );
            };

            Sizzle.attr = function( elem, name ) {
                // Set document vars if needed
                if ( ( elem.ownerDocument || elem ) !== document ) {
                    setDocument( elem );
                }

                var fn = Expr.attrHandle[ name.toLowerCase() ],
                // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
                        fn( elem, name, !documentIsHTML ) :
                        undefined;

                return val !== undefined ?
                    val :
                    support.attributes || !documentIsHTML ?
                        elem.getAttribute( name ) :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
            };

            Sizzle.error = function( msg ) {
                throw new Error( "Syntax error, unrecognized expression: " + msg );
            };

            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function( results ) {
                var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice( 0 );
                results.sort( sortOrder );

                if ( hasDuplicate ) {
                    while ( (elem = results[i++]) ) {
                        if ( elem === results[ i ] ) {
                            j = duplicates.push( i );
                        }
                    }
                    while ( j-- ) {
                        results.splice( duplicates[ j ], 1 );
                    }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
            };

            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function( elem ) {
                var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                if ( !nodeType ) {
                    // If no nodeType, this is expected to be an array
                    while ( (node = elem[i++]) ) {
                        // Do not traverse comment nodes
                        ret += getText( node );
                    }
                } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if ( typeof elem.textContent === "string" ) {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                            ret += getText( elem );
                        }
                    }
                } else if ( nodeType === 3 || nodeType === 4 ) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes

                return ret;
            };

            Expr = Sizzle.selectors = {

                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                    ">": { dir: "parentNode", first: true },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: true },
                    "~": { dir: "previousSibling" }
                },

                preFilter: {
                    "ATTR": function( match ) {
                        match[1] = match[1].replace( runescape, funescape );

                        // Move the given value to match[3] whether quoted or unquoted
                        match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

                        if ( match[2] === "~=" ) {
                            match[3] = " " + match[3] + " ";
                        }

                        return match.slice( 0, 4 );
                    },

                    "CHILD": function( match ) {
                        /* matches from matchExpr["CHILD"]
                         1 type (only|nth|...)
                         2 what (child|of-type)
                         3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                         4 xn-component of xn+y argument ([+-]?\d*n|)
                         5 sign of xn-component
                         6 x of xn-component
                         7 sign of y-component
                         8 y of y-component
                         */
                        match[1] = match[1].toLowerCase();

                        if ( match[1].slice( 0, 3 ) === "nth" ) {
                            // nth-* requires argument
                            if ( !match[3] ) {
                                Sizzle.error( match[0] );
                            }

                            // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                            match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

                            // other types prohibit arguments
                        } else if ( match[3] ) {
                            Sizzle.error( match[0] );
                        }

                        return match;
                    },

                    "PSEUDO": function( match ) {
                        var excess,
                            unquoted = !match[6] && match[2];

                        if ( matchExpr["CHILD"].test( match[0] ) ) {
                            return null;
                        }

                        // Accept quoted arguments as-is
                        if ( match[3] ) {
                            match[2] = match[4] || match[5] || "";

                            // Strip excess characters from unquoted arguments
                        } else if ( unquoted && rpseudo.test( unquoted ) &&
                                // Get excess from tokenize (recursively)
                            (excess = tokenize( unquoted, true )) &&
                                // advance to the next closing parenthesis
                            (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

                            // excess is a negative index
                            match[0] = match[0].slice( 0, excess );
                            match[2] = unquoted.slice( 0, excess );
                        }

                        // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice( 0, 3 );
                    }
                },

                filter: {

                    "TAG": function( nodeNameSelector ) {
                        var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function() { return true; } :
                            function( elem ) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },

                    "CLASS": function( className ) {
                        var pattern = classCache[ className + " " ];

                        return pattern ||
                        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
                        classCache( className, function( elem ) {
                            return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
                        });
                    },

                    "ATTR": function( name, operator, check ) {
                        return function( elem ) {
                            var result = Sizzle.attr( elem, name );

                            if ( result == null ) {
                                return operator === "!=";
                            }
                            if ( !operator ) {
                                return true;
                            }

                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                    operator === "^=" ? check && result.indexOf( check ) === 0 :
                                        operator === "*=" ? check && result.indexOf( check ) > -1 :
                                            operator === "$=" ? check && result.slice( -check.length ) === check :
                                                operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
                                                    operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
                                                        false;
                        };
                    },

                    "CHILD": function( type, what, argument, first, last ) {
                        var simple = type.slice( 0, 3 ) !== "nth",
                            forward = type.slice( -4 ) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?

                            // Shortcut for :nth-*(n)
                            function( elem ) {
                                return !!elem.parentNode;
                            } :

                            function( elem, context, xml ) {
                                var cache, outerCache, node, diff, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;

                                if ( parent ) {

                                    // :(first|last|only)-(child|of-type)
                                    if ( simple ) {
                                        while ( dir ) {
                                            node = elem;
                                            while ( (node = node[ dir ]) ) {
                                                if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                                                    return false;
                                                }
                                            }
                                            // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [ forward ? parent.firstChild : parent.lastChild ];

                                    // non-xml :nth-child(...) stores cache data on `parent`
                                    if ( forward && useCache ) {
                                        // Seek `elem` from a previously-cached index
                                        outerCache = parent[ expando ] || (parent[ expando ] = {});
                                        cache = outerCache[ type ] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = cache[0] === dirruns && cache[2];
                                        node = nodeIndex && parent.childNodes[ nodeIndex ];

                                        while ( (node = ++nodeIndex && node && node[ dir ] ||

                                            // Fallback to seeking `elem` from the start
                                        (diff = nodeIndex = 0) || start.pop()) ) {

                                            // When found, cache indexes on `parent` and break
                                            if ( node.nodeType === 1 && ++diff && node === elem ) {
                                                outerCache[ type ] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        }

                                        // Use previously-cached element index if available
                                    } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
                                        diff = cache[1];

                                        // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                    } else {
                                        // Use the same loop as above to seek `elem` from the start
                                        while ( (node = ++nodeIndex && node && node[ dir ] ||
                                        (diff = nodeIndex = 0) || start.pop()) ) {

                                            if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
                                                // Cache the index of each encountered element
                                                if ( useCache ) {
                                                    (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
                                                }

                                                if ( node === elem ) {
                                                    break;
                                                }
                                            }
                                        }
                                    }

                                    // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || ( diff % first === 0 && diff / first >= 0 );
                                }
                            };
                    },

                    "PSEUDO": function( pseudo, argument ) {
                        // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args,
                            fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
                                Sizzle.error( "unsupported pseudo: " + pseudo );

                        // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if ( fn[ expando ] ) {
                            return fn( argument );
                        }

                        // But maintain support for old signatures
                        if ( fn.length > 1 ) {
                            args = [ pseudo, pseudo, "", argument ];
                            return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
                                markFunction(function( seed, matches ) {
                                    var idx,
                                        matched = fn( seed, argument ),
                                        i = matched.length;
                                    while ( i-- ) {
                                        idx = indexOf.call( seed, matched[i] );
                                        seed[ idx ] = !( matches[ idx ] = matched[i] );
                                    }
                                }) :
                                function( elem ) {
                                    return fn( elem, 0, args );
                                };
                        }

                        return fn;
                    }
                },

                pseudos: {
                    // Potentially complex pseudos
                    "not": markFunction(function( selector ) {
                        // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile( selector.replace( rtrim, "$1" ) );

                        return matcher[ expando ] ?
                            markFunction(function( seed, matches, context, xml ) {
                                var elem,
                                    unmatched = matcher( seed, null, xml, [] ),
                                    i = seed.length;

                                // Match elements unmatched by `matcher`
                                while ( i-- ) {
                                    if ( (elem = unmatched[i]) ) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function( elem, context, xml ) {
                                input[0] = elem;
                                matcher( input, null, xml, results );
                                return !results.pop();
                            };
                    }),

                    "has": markFunction(function( selector ) {
                        return function( elem ) {
                            return Sizzle( selector, elem ).length > 0;
                        };
                    }),

                    "contains": markFunction(function( text ) {
                        return function( elem ) {
                            return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
                        };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction( function( lang ) {
                        // lang value must be a valid identifier
                        if ( !ridentifier.test(lang || "") ) {
                            Sizzle.error( "unsupported lang: " + lang );
                        }
                        lang = lang.replace( runescape, funescape ).toLowerCase();
                        return function( elem ) {
                            var elemLang;
                            do {
                                if ( (elemLang = documentIsHTML ?
                                        elem.lang :
                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
                                }
                            } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
                            return false;
                        };
                    }),

                    // Miscellaneous
                    "target": function( elem ) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice( 1 ) === elem.id;
                    },

                    "root": function( elem ) {
                        return elem === docElem;
                    },

                    "focus": function( elem ) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },

                    // Boolean properties
                    "enabled": function( elem ) {
                        return elem.disabled === false;
                    },

                    "disabled": function( elem ) {
                        return elem.disabled === true;
                    },

                    "checked": function( elem ) {
                        // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },

                    "selected": function( elem ) {
                        // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if ( elem.parentNode ) {
                            elem.parentNode.selectedIndex;
                        }

                        return elem.selected === true;
                    },

                    // Contents
                    "empty": function( elem ) {
                        // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                            if ( elem.nodeType < 6 ) {
                                return false;
                            }
                        }
                        return true;
                    },

                    "parent": function( elem ) {
                        return !Expr.pseudos["empty"]( elem );
                    },

                    // Element/input types
                    "header": function( elem ) {
                        return rheader.test( elem.nodeName );
                    },

                    "input": function( elem ) {
                        return rinputs.test( elem.nodeName );
                    },

                    "button": function( elem ) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },

                    "text": function( elem ) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                        elem.type === "text" &&

                            // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
                    },

                    // Position-in-collection
                    "first": createPositionalPseudo(function() {
                        return [ 0 ];
                    }),

                    "last": createPositionalPseudo(function( matchIndexes, length ) {
                        return [ length - 1 ];
                    }),

                    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        return [ argument < 0 ? argument + length : argument ];
                    }),

                    "even": createPositionalPseudo(function( matchIndexes, length ) {
                        var i = 0;
                        for ( ; i < length; i += 2 ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "odd": createPositionalPseudo(function( matchIndexes, length ) {
                        var i = 1;
                        for ( ; i < length; i += 2 ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        var i = argument < 0 ? argument + length : argument;
                        for ( ; --i >= 0; ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    }),

                    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
                        var i = argument < 0 ? argument + length : argument;
                        for ( ; ++i < length; ) {
                            matchIndexes.push( i );
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
            for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
                Expr.pseudos[ i ] = createInputPseudo( i );
            }
            for ( i in { submit: true, reset: true } ) {
                Expr.pseudos[ i ] = createButtonPseudo( i );
            }

// Easy API for creating new setFilters
            function setFilters() {}
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters,
                    cached = tokenCache[ selector + " " ];

                if ( cached ) {
                    return parseOnly ? 0 : cached.slice( 0 );
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while ( soFar ) {

                    // Comma and first run
                    if ( !matched || (match = rcomma.exec( soFar )) ) {
                        if ( match ) {
                            // Don't consume trailing commas as valid
                            soFar = soFar.slice( match[0].length ) || soFar;
                        }
                        groups.push( (tokens = []) );
                    }

                    matched = false;

                    // Combinators
                    if ( (match = rcombinators.exec( soFar )) ) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            // Cast descendant combinators to space
                            type: match[0].replace( rtrim, " " )
                        });
                        soFar = soFar.slice( matched.length );
                    }

                    // Filters
                    for ( type in Expr.filter ) {
                        if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
                            (match = preFilters[ type ]( match ))) ) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice( matched.length );
                        }
                    }

                    if ( !matched ) {
                        break;
                    }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ?
                    soFar.length :
                    soFar ?
                        Sizzle.error( selector ) :
                        // Cache the tokens
                        tokenCache( selector, groups ).slice( 0 );
            };

            function toSelector( tokens ) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for ( ; i < len; i++ ) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator( matcher, combinator, base ) {
                var dir = combinator.dir,
                    checkNonElements = base && dir === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    // Check against closest ancestor/preceding element
                    function( elem, context, xml ) {
                        while ( (elem = elem[ dir ]) ) {
                            if ( elem.nodeType === 1 || checkNonElements ) {
                                return matcher( elem, context, xml );
                            }
                        }
                    } :

                    // Check against all ancestor/preceding elements
                    function( elem, context, xml ) {
                        var oldCache, outerCache,
                            newCache = [ dirruns, doneName ];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                        if ( xml ) {
                            while ( (elem = elem[ dir ]) ) {
                                if ( elem.nodeType === 1 || checkNonElements ) {
                                    if ( matcher( elem, context, xml ) ) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ( (elem = elem[ dir ]) ) {
                                if ( elem.nodeType === 1 || checkNonElements ) {
                                    outerCache = elem[ expando ] || (elem[ expando ] = {});
                                    if ( (oldCache = outerCache[ dir ]) &&
                                        oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

                                        // Assign to newCache so results back-propagate to previous elements
                                        return (newCache[ 2 ] = oldCache[ 2 ]);
                                    } else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        outerCache[ dir ] = newCache;

                                        // A match means we're done; a fail means we have to keep checking
                                        if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    };
            }

            function elementMatcher( matchers ) {
                return matchers.length > 1 ?
                    function( elem, context, xml ) {
                        var i = matchers.length;
                        while ( i-- ) {
                            if ( !matchers[i]( elem, context, xml ) ) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts( selector, contexts, results ) {
                var i = 0,
                    len = contexts.length;
                for ( ; i < len; i++ ) {
                    Sizzle( selector, contexts[i], results );
                }
                return results;
            }

            function condense( unmatched, map, filter, context, xml ) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for ( ; i < len; i++ ) {
                    if ( (elem = unmatched[i]) ) {
                        if ( !filter || filter( elem, context, xml ) ) {
                            newUnmatched.push( elem );
                            if ( mapped ) {
                                map.push( i );
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
                if ( postFilter && !postFilter[ expando ] ) {
                    postFilter = setMatcher( postFilter );
                }
                if ( postFinder && !postFinder[ expando ] ) {
                    postFinder = setMatcher( postFinder, postSelector );
                }
                return markFunction(function( seed, results, context, xml ) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,

                    // Get initial elements from seed or context
                        elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && ( seed || !selector ) ?
                            condense( elems, preMap, preFilter, context, xml ) :
                            elems,

                        matcherOut = matcher ?
                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                                // ...intermediate processing is necessary
                                [] :

                                // ...otherwise use results directly
                                results :
                            matcherIn;

                    // Find primary matches
                    if ( matcher ) {
                        matcher( matcherIn, matcherOut, context, xml );
                    }

                    // Apply postFilter
                    if ( postFilter ) {
                        temp = condense( matcherOut, postMap );
                        postFilter( temp, [], context, xml );

                        // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while ( i-- ) {
                            if ( (elem = temp[i]) ) {
                                matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
                            }
                        }
                    }

                    if ( seed ) {
                        if ( postFinder || preFilter ) {
                            if ( postFinder ) {
                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while ( i-- ) {
                                    if ( (elem = matcherOut[i]) ) {
                                        // Restore matcherIn since elem is not yet a final match
                                        temp.push( (matcherIn[i] = elem) );
                                    }
                                }
                                postFinder( null, (matcherOut = []), temp, xml );
                            }

                            // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while ( i-- ) {
                                if ( (elem = matcherOut[i]) &&
                                    (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }

                        // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                                matcherOut.splice( preexisting, matcherOut.length ) :
                                matcherOut
                        );
                        if ( postFinder ) {
                            postFinder( null, results, matcherOut, xml );
                        } else {
                            push.apply( results, matcherOut );
                        }
                    }
                });
            }

            function matcherFromTokens( tokens ) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[ tokens[0].type ],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator( function( elem ) {
                        return elem === checkContext;
                    }, implicitRelative, true ),
                    matchAnyContext = addCombinator( function( elem ) {
                        return indexOf.call( checkContext, elem ) > -1;
                    }, implicitRelative, true ),
                    matchers = [ function( elem, context, xml ) {
                        return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                            (checkContext = context).nodeType ?
                                matchContext( elem, context, xml ) :
                                matchAnyContext( elem, context, xml ) );
                    } ];

                for ( ; i < len; i++ ) {
                    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                        matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
                    } else {
                        matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

                        // Return special upon seeing a positional matcher
                        if ( matcher[ expando ] ) {
                            // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for ( ; j < len; j++ ) {
                                if ( Expr.relative[ tokens[j].type ] ) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher( matchers ),
                                i > 1 && toSelector(
                                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                    tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
                                ).replace( rtrim, "$1" ),
                                matcher,
                                i < j && matcherFromTokens( tokens.slice( i, j ) ),
                                j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
                                j < len && toSelector( tokens )
                            );
                        }
                        matchers.push( matcher );
                    }
                }

                return elementMatcher( matchers );
            }

            function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function( seed, context, xml, results, outermost ) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                        // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
                        // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if ( outermost ) {
                            outermostContext = context !== document && context;
                        }

                        // Add elements passing elementMatchers directly to results
                        // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
                            if ( byElement && elem ) {
                                j = 0;
                                while ( (matcher = elementMatchers[j++]) ) {
                                    if ( matcher( elem, context, xml ) ) {
                                        results.push( elem );
                                        break;
                                    }
                                }
                                if ( outermost ) {
                                    dirruns = dirrunsUnique;
                                }
                            }

                            // Track unmatched elements for set filters
                            if ( bySet ) {
                                // They will have gone through all possible matchers
                                if ( (elem = !matcher && elem) ) {
                                    matchedCount--;
                                }

                                // Lengthen the array for every element, matched or not
                                if ( seed ) {
                                    unmatched.push( elem );
                                }
                            }
                        }

                        // Apply set filters to unmatched elements
                        matchedCount += i;
                        if ( bySet && i !== matchedCount ) {
                            j = 0;
                            while ( (matcher = setMatchers[j++]) ) {
                                matcher( unmatched, setMatched, context, xml );
                            }

                            if ( seed ) {
                                // Reintegrate element matches to eliminate the need for sorting
                                if ( matchedCount > 0 ) {
                                    while ( i-- ) {
                                        if ( !(unmatched[i] || setMatched[i]) ) {
                                            setMatched[i] = pop.call( results );
                                        }
                                    }
                                }

                                // Discard index placeholder values to get only actual matches
                                setMatched = condense( setMatched );
                            }

                            // Add matches to results
                            push.apply( results, setMatched );

                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if ( outermost && !seed && setMatched.length > 0 &&
                                ( matchedCount + setMatchers.length ) > 1 ) {

                                Sizzle.uniqueSort( results );
                            }
                        }

                        // Override manipulation of globals by nested matchers
                        if ( outermost ) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }

                        return unmatched;
                    };

                return bySet ?
                    markFunction( superMatcher ) :
                    superMatcher;
            }

            compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
                var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[ selector + " " ];

                if ( !cached ) {
                    // Generate a function of recursive functions that can be used to check each element
                    if ( !match ) {
                        match = tokenize( selector );
                    }
                    i = match.length;
                    while ( i-- ) {
                        cached = matcherFromTokens( match[i] );
                        if ( cached[ expando ] ) {
                            setMatchers.push( cached );
                        } else {
                            elementMatchers.push( cached );
                        }
                    }

                    // Cache the compiled function
                    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

                    // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };

            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function( selector, context, results, seed ) {
                var i, tokens, token, type, find,
                    compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize( (selector = compiled.selector || selector) );

                results = results || [];

                // Try to minimize operations if there is no seed and only one group
                if ( match.length === 1 ) {

                    // Take a shortcut and set the context if the root selector is an ID
                    tokens = match[0] = match[0].slice( 0 );
                    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        support.getById && context.nodeType === 9 && documentIsHTML &&
                        Expr.relative[ tokens[1].type ] ) {

                        context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
                        if ( !context ) {
                            return results;

                            // Precompiled matchers will still verify ancestry, so step up a level
                        } else if ( compiled ) {
                            context = context.parentNode;
                        }

                        selector = selector.slice( tokens.shift().value.length );
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
                    while ( i-- ) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if ( Expr.relative[ (type = token.type) ] ) {
                            break;
                        }
                        if ( (find = Expr.find[ type ]) ) {
                            // Search, expanding context for leading sibling combinators
                            if ( (seed = find(
                                    token.matches[0].replace( runescape, funescape ),
                                    rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
                                )) ) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice( i, 1 );
                                selector = seed.length && toSelector( tokens );
                                if ( !selector ) {
                                    push.apply( results, seed );
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                ( compiled || compile( selector, match ) )(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    rsibling.test( selector ) && testContext( context.parentNode ) || context
                );
                return results;
            };

// One-time assignments

// Sort stability
            support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
            setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function( div1 ) {
                // Should return 1, but returns 4 (following)
                return div1.compareDocumentPosition( document.createElement("div") ) & 1;
            });

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if ( !assert(function( div ) {
                    div.innerHTML = "<a href='#'></a>";
                    return div.firstChild.getAttribute("href") === "#" ;
                }) ) {
                addHandle( "type|href|height|width", function( elem, name, isXML ) {
                    if ( !isXML ) {
                        return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
                    }
                });
            }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
            if ( !support.attributes || !assert(function( div ) {
                    div.innerHTML = "<input/>";
                    div.firstChild.setAttribute( "value", "" );
                    return div.firstChild.getAttribute( "value" ) === "";
                }) ) {
                addHandle( "value", function( elem, name, isXML ) {
                    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
                        return elem.defaultValue;
                    }
                });
            }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
            if ( !assert(function( div ) {
                    return div.getAttribute("disabled") == null;
                }) ) {
                addHandle( booleans, function( elem, name, isXML ) {
                    var val;
                    if ( !isXML ) {
                        return elem[ name ] === true ? name.toLowerCase() :
                            (val = elem.getAttributeNode( name )) && val.specified ?
                                val.value :
                                null;
                    }
                });
            }

            return Sizzle;

        })( window );



    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;



    var rneedsContext = jQuery.expr.match.needsContext;

    var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



    var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
    function winnow( elements, qualifier, not ) {
        if ( jQuery.isFunction( qualifier ) ) {
            return jQuery.grep( elements, function( elem, i ) {
                /* jshint -W018 */
                return !!qualifier.call( elem, i, elem ) !== not;
            });

        }

        if ( qualifier.nodeType ) {
            return jQuery.grep( elements, function( elem ) {
                return ( elem === qualifier ) !== not;
            });

        }

        if ( typeof qualifier === "string" ) {
            if ( risSimple.test( qualifier ) ) {
                return jQuery.filter( qualifier, elements, not );
            }

            qualifier = jQuery.filter( qualifier, elements );
        }

        return jQuery.grep( elements, function( elem ) {
            return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
        });
    }

    jQuery.filter = function( expr, elems, not ) {
        var elem = elems[ 0 ];

        if ( not ) {
            expr = ":not(" + expr + ")";
        }

        return elems.length === 1 && elem.nodeType === 1 ?
            jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
            jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
                return elem.nodeType === 1;
            }));
    };

    jQuery.fn.extend({
        find: function( selector ) {
            var i,
                ret = [],
                self = this,
                len = self.length;

            if ( typeof selector !== "string" ) {
                return this.pushStack( jQuery( selector ).filter(function() {
                    for ( i = 0; i < len; i++ ) {
                        if ( jQuery.contains( self[ i ], this ) ) {
                            return true;
                        }
                    }
                }) );
            }

            for ( i = 0; i < len; i++ ) {
                jQuery.find( selector, self[ i ], ret );
            }

            // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function( selector ) {
            return this.pushStack( winnow(this, selector || [], false) );
        },
        not: function( selector ) {
            return this.pushStack( winnow(this, selector || [], true) );
        },
        is: function( selector ) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test( selector ) ?
                    jQuery( selector ) :
                selector || [],
                false
            ).length;
        }
    });


// Initialize a jQuery object


// A central reference to the root jQuery(document)
    var rootjQuery,

    // Use the correct document accordingly with window argument (sandbox)
        document = window.document,

    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

        init = jQuery.fn.init = function( selector, context ) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if ( !selector ) {
                return this;
            }

            // Handle HTML strings
            if ( typeof selector === "string" ) {
                if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [ null, selector, null ];

                } else {
                    match = rquickExpr.exec( selector );
                }

                // Match html or make sure no context is specified for #id
                if ( match && (match[1] || !context) ) {

                    // HANDLE: $(html) -> $(array)
                    if ( match[1] ) {
                        context = context instanceof jQuery ? context[0] : context;

                        // scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge( this, jQuery.parseHTML(
                            match[1],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ) );

                        // HANDLE: $(html, props)
                        if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
                            for ( match in context ) {
                                // Properties of context are called as methods if possible
                                if ( jQuery.isFunction( this[ match ] ) ) {
                                    this[ match ]( context[ match ] );

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr( match, context[ match ] );
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById( match[2] );

                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        if ( elem && elem.parentNode ) {
                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            if ( elem.id !== match[2] ) {
                                return rootjQuery.find( selector );
                            }

                            // Otherwise, we inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }

                        this.context = document;
                        this.selector = selector;
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if ( !context || context.jquery ) {
                    return ( context || rootjQuery ).find( selector );

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor( context ).find( selector );
                }

                // HANDLE: $(DOMElement)
            } else if ( selector.nodeType ) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if ( jQuery.isFunction( selector ) ) {
                return typeof rootjQuery.ready !== "undefined" ?
                    rootjQuery.ready( selector ) :
                    // Execute immediately if ready is not present
                    selector( jQuery );
            }

            if ( selector.selector !== undefined ) {
                this.selector = selector.selector;
                this.context = selector.context;
            }

            return jQuery.makeArray( selector, this );
        };

// Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

// Initialize central reference
    rootjQuery = jQuery( document );


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    // methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.extend({
        dir: function( elem, dir, until ) {
            var matched = [],
                cur = elem[ dir ];

            while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
                if ( cur.nodeType === 1 ) {
                    matched.push( cur );
                }
                cur = cur[dir];
            }
            return matched;
        },

        sibling: function( n, elem ) {
            var r = [];

            for ( ; n; n = n.nextSibling ) {
                if ( n.nodeType === 1 && n !== elem ) {
                    r.push( n );
                }
            }

            return r;
        }
    });

    jQuery.fn.extend({
        has: function( target ) {
            var i,
                targets = jQuery( target, this ),
                len = targets.length;

            return this.filter(function() {
                for ( i = 0; i < len; i++ ) {
                    if ( jQuery.contains( this, targets[i] ) ) {
                        return true;
                    }
                }
            });
        },

        closest: function( selectors, context ) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
                    jQuery( selectors, context || this.context ) :
                    0;

            for ( ; i < l; i++ ) {
                for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
                    // Always skip document fragments
                    if ( cur.nodeType < 11 && (pos ?
                        pos.index(cur) > -1 :

                            // Don't pass non-elements to Sizzle
                        cur.nodeType === 1 &&
                        jQuery.find.matchesSelector(cur, selectors)) ) {

                        matched.push( cur );
                        break;
                    }
                }
            }

            return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
        },

        // Determine the position of an element within
        // the matched set of elements
        index: function( elem ) {

            // No argument, return index in parent
            if ( !elem ) {
                return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
            }

            // index in selector
            if ( typeof elem === "string" ) {
                return jQuery.inArray( this[0], jQuery( elem ) );
            }

            // Locate the position of the desired element
            return jQuery.inArray(
                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem, this );
        },

        add: function( selector, context ) {
            return this.pushStack(
                jQuery.unique(
                    jQuery.merge( this.get(), jQuery( selector, context ) )
                )
            );
        },

        addBack: function( selector ) {
            return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    function sibling( cur, dir ) {
        do {
            cur = cur[ dir ];
        } while ( cur && cur.nodeType !== 1 );

        return cur;
    }

    jQuery.each({
        parent: function( elem ) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function( elem ) {
            return jQuery.dir( elem, "parentNode" );
        },
        parentsUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "parentNode", until );
        },
        next: function( elem ) {
            return sibling( elem, "nextSibling" );
        },
        prev: function( elem ) {
            return sibling( elem, "previousSibling" );
        },
        nextAll: function( elem ) {
            return jQuery.dir( elem, "nextSibling" );
        },
        prevAll: function( elem ) {
            return jQuery.dir( elem, "previousSibling" );
        },
        nextUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "nextSibling", until );
        },
        prevUntil: function( elem, i, until ) {
            return jQuery.dir( elem, "previousSibling", until );
        },
        siblings: function( elem ) {
            return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
        },
        children: function( elem ) {
            return jQuery.sibling( elem.firstChild );
        },
        contents: function( elem ) {
            return jQuery.nodeName( elem, "iframe" ) ?
            elem.contentDocument || elem.contentWindow.document :
                jQuery.merge( [], elem.childNodes );
        }
    }, function( name, fn ) {
        jQuery.fn[ name ] = function( until, selector ) {
            var ret = jQuery.map( this, fn, until );

            if ( name.slice( -5 ) !== "Until" ) {
                selector = until;
            }

            if ( selector && typeof selector === "string" ) {
                ret = jQuery.filter( selector, ret );
            }

            if ( this.length > 1 ) {
                // Remove duplicates
                if ( !guaranteedUnique[ name ] ) {
                    ret = jQuery.unique( ret );
                }

                // Reverse order for parents* and prev-derivatives
                if ( rparentsprev.test( name ) ) {
                    ret = ret.reverse();
                }
            }

            return this.pushStack( ret );
        };
    });
    var rnotwhite = (/\S+/g);



// String to Object options format cache
    var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
    function createOptions( options ) {
        var object = optionsCache[ options ] = {};
        jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
            object[ flag ] = true;
        });
        return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function( options ) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            ( optionsCache[ options ] || createOptions( options ) ) :
            jQuery.extend( {}, options );

        var // Flag to know if list is currently firing
            firing,
        // Last fire value (for non-forgettable lists)
            memory,
        // Flag to know if list was already fired
            fired,
        // End of the loop when firing
            firingLength,
        // Index of currently firing callback (modified by remove if needed)
            firingIndex,
        // First callback to fire (used internally by add and fireWith)
            firingStart,
        // Actual callback list
            list = [],
        // Stack of fire calls for repeatable lists
            stack = !options.once && [],
        // Fire callbacks
            fire = function( data ) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for ( ; list && firingIndex < firingLength; firingIndex++ ) {
                    if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
                        memory = false; // To prevent further calls using add
                        break;
                    }
                }
                firing = false;
                if ( list ) {
                    if ( stack ) {
                        if ( stack.length ) {
                            fire( stack.shift() );
                        }
                    } else if ( memory ) {
                        list = [];
                    } else {
                        self.disable();
                    }
                }
            },
        // Actual Callbacks object
            self = {
                // Add a callback or a collection of callbacks to the list
                add: function() {
                    if ( list ) {
                        // First, we save the current length
                        var start = list.length;
                        (function add( args ) {
                            jQuery.each( args, function( _, arg ) {
                                var type = jQuery.type( arg );
                                if ( type === "function" ) {
                                    if ( !options.unique || !self.has( arg ) ) {
                                        list.push( arg );
                                    }
                                } else if ( arg && arg.length && type !== "string" ) {
                                    // Inspect recursively
                                    add( arg );
                                }
                            });
                        })( arguments );
                        // Do we need to add the callbacks to the
                        // current firing batch?
                        if ( firing ) {
                            firingLength = list.length;
                            // With memory, if we're not firing then
                            // we should call right away
                        } else if ( memory ) {
                            firingStart = start;
                            fire( memory );
                        }
                    }
                    return this;
                },
                // Remove a callback from the list
                remove: function() {
                    if ( list ) {
                        jQuery.each( arguments, function( _, arg ) {
                            var index;
                            while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
                                list.splice( index, 1 );
                                // Handle firing indexes
                                if ( firing ) {
                                    if ( index <= firingLength ) {
                                        firingLength--;
                                    }
                                    if ( index <= firingIndex ) {
                                        firingIndex--;
                                    }
                                }
                            }
                        });
                    }
                    return this;
                },
                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function( fn ) {
                    return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
                },
                // Remove all callbacks from the list
                empty: function() {
                    list = [];
                    firingLength = 0;
                    return this;
                },
                // Have the list do nothing anymore
                disable: function() {
                    list = stack = memory = undefined;
                    return this;
                },
                // Is it disabled?
                disabled: function() {
                    return !list;
                },
                // Lock the list in its current state
                lock: function() {
                    stack = undefined;
                    if ( !memory ) {
                        self.disable();
                    }
                    return this;
                },
                // Is it locked?
                locked: function() {
                    return !stack;
                },
                // Call all callbacks with the given context and arguments
                fireWith: function( context, args ) {
                    if ( list && ( !fired || stack ) ) {
                        args = args || [];
                        args = [ context, args.slice ? args.slice() : args ];
                        if ( firing ) {
                            stack.push( args );
                        } else {
                            fire( args );
                        }
                    }
                    return this;
                },
                // Call all the callbacks with the given arguments
                fire: function() {
                    self.fireWith( this, arguments );
                    return this;
                },
                // To know if the callbacks have already been called at least once
                fired: function() {
                    return !!fired;
                }
            };

        return self;
    };


    jQuery.extend({

        Deferred: function( func ) {
            var tuples = [
                    // action, add listener, listener list, final state
                    [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
                    [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
                    [ "notify", "progress", jQuery.Callbacks("memory") ]
                ],
                state = "pending",
                promise = {
                    state: function() {
                        return state;
                    },
                    always: function() {
                        deferred.done( arguments ).fail( arguments );
                        return this;
                    },
                    then: function( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;
                        return jQuery.Deferred(function( newDefer ) {
                            jQuery.each( tuples, function( i, tuple ) {
                                var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[ tuple[1] ](function() {
                                    var returned = fn && fn.apply( this, arguments );
                                    if ( returned && jQuery.isFunction( returned.promise ) ) {
                                        returned.promise()
                                            .done( newDefer.resolve )
                                            .fail( newDefer.reject )
                                            .progress( newDefer.notify );
                                    } else {
                                        newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function( obj ) {
                        return obj != null ? jQuery.extend( obj, promise ) : promise;
                    }
                },
                deferred = {};

            // Keep pipe for back-compat
            promise.pipe = promise.then;

            // Add list-specific methods
            jQuery.each( tuples, function( i, tuple ) {
                var list = tuple[ 2 ],
                    stateString = tuple[ 3 ];

                // promise[ done | fail | progress ] = list.add
                promise[ tuple[1] ] = list.add;

                // Handle state
                if ( stateString ) {
                    list.add(function() {
                        // state = [ resolved | rejected ]
                        state = stateString;

                        // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
                }

                // deferred[ resolve | reject | notify ]
                deferred[ tuple[0] ] = function() {
                    deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
                    return this;
                };
                deferred[ tuple[0] + "With" ] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise( deferred );

            // Call given func if any
            if ( func ) {
                func.call( deferred, deferred );
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function( subordinate /* , ..., subordinateN */ ) {
            var i = 0,
                resolveValues = slice.call( arguments ),
                length = resolveValues.length,

            // the count of uncompleted subordinates
                remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

            // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

            // Update function for both resolve and progress values
                updateFunc = function( i, contexts, values ) {
                    return function( value ) {
                        contexts[ i ] = this;
                        values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
                        if ( values === progressValues ) {
                            deferred.notifyWith( contexts, values );

                        } else if ( !(--remaining) ) {
                            deferred.resolveWith( contexts, values );
                        }
                    };
                },

                progressValues, progressContexts, resolveContexts;

            // add listeners to Deferred subordinates; treat others as resolved
            if ( length > 1 ) {
                progressValues = new Array( length );
                progressContexts = new Array( length );
                resolveContexts = new Array( length );
                for ( ; i < length; i++ ) {
                    if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
                        resolveValues[ i ].promise()
                            .done( updateFunc( i, resolveContexts, resolveValues ) )
                            .fail( deferred.reject )
                            .progress( updateFunc( i, progressContexts, progressValues ) );
                    } else {
                        --remaining;
                    }
                }
            }

            // if we're not waiting on anything, resolve the master
            if ( !remaining ) {
                deferred.resolveWith( resolveContexts, resolveValues );
            }

            return deferred.promise();
        }
    });


// The deferred used on DOM ready
    var readyList;

    jQuery.fn.ready = function( fn ) {
        // Add the callback
        jQuery.ready.promise().done( fn );

        return this;
    };

    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                jQuery.readyWait++;
            } else {
                jQuery.ready( true );
            }
        },

        // Handle when the DOM is ready
        ready: function( wait ) {

            // Abort if there are pending holds or we're already ready
            if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
                return;
            }

            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( !document.body ) {
                return setTimeout( jQuery.ready );
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if ( wait !== true && --jQuery.readyWait > 0 ) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith( document, [ jQuery ] );

            // Trigger any bound ready events
            if ( jQuery.fn.triggerHandler ) {
                jQuery( document ).triggerHandler( "ready" );
                jQuery( document ).off( "ready" );
            }
        }
    });

    /**
     * Clean-up method for dom ready events
     */
    function detach() {
        if ( document.addEventListener ) {
            document.removeEventListener( "DOMContentLoaded", completed, false );
            window.removeEventListener( "load", completed, false );

        } else {
            document.detachEvent( "onreadystatechange", completed );
            window.detachEvent( "onload", completed );
        }
    }

    /**
     * The ready event handler and self cleanup method
     */
    function completed() {
        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
            detach();
            jQuery.ready();
        }
    }

    jQuery.ready.promise = function( obj ) {
        if ( !readyList ) {

            readyList = jQuery.Deferred();

            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // we once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                setTimeout( jQuery.ready );

                // Standards-based browsers support DOMContentLoaded
            } else if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", completed, false );

                // A fallback to window.onload, that will always work
                window.addEventListener( "load", completed, false );

                // If IE event model is used
            } else {
                // Ensure firing before onload, maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", completed );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", completed );

                // If IE and not a frame
                // continually check to see if the document is ready
                var top = false;

                try {
                    top = window.frameElement == null && document.documentElement;
                } catch(e) {}

                if ( top && top.doScroll ) {
                    (function doScrollCheck() {
                        if ( !jQuery.isReady ) {

                            try {
                                // Use the trick by Diego Perini
                                // http://javascript.nwbox.com/IEContentLoaded/
                                top.doScroll("left");
                            } catch(e) {
                                return setTimeout( doScrollCheck, 50 );
                            }

                            // detach all dom ready events
                            detach();

                            // and execute any waiting functions
                            jQuery.ready();
                        }
                    })();
                }
            }
        }
        return readyList.promise( obj );
    };


    var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
    var i;
    for ( i in jQuery( support ) ) {
        break;
    }
    support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
    support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
    jQuery(function() {
        // Minified: var a,b,c,d
        var val, div, body, container;

        body = document.getElementsByTagName( "body" )[ 0 ];
        if ( !body || !body.style ) {
            // Return for frameset docs that don't have a body
            return;
        }

        // Setup
        div = document.createElement( "div" );
        container = document.createElement( "div" );
        container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        body.appendChild( container ).appendChild( div );

        if ( typeof div.style.zoom !== strundefined ) {
            // Support: IE<8
            // Check if natively block-level elements act like inline-block
            // elements when setting their display to 'inline' and giving
            // them layout
            div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

            support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
            if ( val ) {
                // Prevent IE 6 from affecting layout for positioned elements #11048
                // Prevent IE from shrinking the body in IE 7 mode #12869
                // Support: IE<8
                body.style.zoom = 1;
            }
        }

        body.removeChild( container );
    });




    (function() {
        var div = document.createElement( "div" );

        // Execute the test only if not already executed in another module.
        if (support.deleteExpando == null) {
            // Support: IE<9
            support.deleteExpando = true;
            try {
                delete div.test;
            } catch( e ) {
                support.deleteExpando = false;
            }
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();


    /**
     * Determines whether an object can have data
     */
    jQuery.acceptData = function( elem ) {
        var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
            nodeType = +elem.nodeType || 1;

        // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
        return nodeType !== 1 && nodeType !== 9 ?
            false :

            // Nodes accept data unless otherwise specified; rejection can be conditional
        !noData || noData !== true && elem.getAttribute("classid") === noData;
    };


    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /([A-Z])/g;

    function dataAttr( elem, key, data ) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if ( data === undefined && elem.nodeType === 1 ) {

            var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

            data = elem.getAttribute( name );

            if ( typeof data === "string" ) {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                            data === "null" ? null :
                                // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data :
                                    rbrace.test( data ) ? jQuery.parseJSON( data ) :
                                        data;
                } catch( e ) {}

                // Make sure we set the data so it isn't changed later
                jQuery.data( elem, key, data );

            } else {
                data = undefined;
            }
        }

        return data;
    }

// checks a cache object for emptiness
    function isEmptyDataObject( obj ) {
        var name;
        for ( name in obj ) {

            // if the public data object is empty, the private is still empty
            if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
                continue;
            }
            if ( name !== "toJSON" ) {
                return false;
            }
        }

        return true;
    }

    function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
        if ( !jQuery.acceptData( elem ) ) {
            return;
        }

        var ret, thisCache,
            internalKey = jQuery.expando,

        // We have to handle DOM nodes and JS objects differently because IE6-7
        // can't GC object references properly across the DOM-JS boundary
            isNode = elem.nodeType,

        // Only DOM nodes need the global jQuery cache; JS object data is
        // attached directly to the object so GC can occur automatically
            cache = isNode ? jQuery.cache : elem,

        // Only defining an ID for JS objects if its cache already exists allows
        // the code to shortcut on the same path as a DOM node with no cache
            id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
            return;
        }

        if ( !id ) {
            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            if ( isNode ) {
                id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
            } else {
                id = internalKey;
            }
        }

        if ( !cache[ id ] ) {
            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
        }

        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        if ( typeof name === "object" || typeof name === "function" ) {
            if ( pvt ) {
                cache[ id ] = jQuery.extend( cache[ id ], name );
            } else {
                cache[ id ].data = jQuery.extend( cache[ id ].data, name );
            }
        }

        thisCache = cache[ id ];

        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        if ( !pvt ) {
            if ( !thisCache.data ) {
                thisCache.data = {};
            }

            thisCache = thisCache.data;
        }

        if ( data !== undefined ) {
            thisCache[ jQuery.camelCase( name ) ] = data;
        }

        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        if ( typeof name === "string" ) {

            // First Try to find as-is property data
            ret = thisCache[ name ];

            // Test for null|undefined property data
            if ( ret == null ) {

                // Try to find the camelCased property
                ret = thisCache[ jQuery.camelCase( name ) ];
            }
        } else {
            ret = thisCache;
        }

        return ret;
    }

    function internalRemoveData( elem, name, pvt ) {
        if ( !jQuery.acceptData( elem ) ) {
            return;
        }

        var thisCache, i,
            isNode = elem.nodeType,

        // See jQuery.data for more information
            cache = isNode ? jQuery.cache : elem,
            id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        if ( !cache[ id ] ) {
            return;
        }

        if ( name ) {

            thisCache = pvt ? cache[ id ] : cache[ id ].data;

            if ( thisCache ) {

                // Support array or space separated string names for data keys
                if ( !jQuery.isArray( name ) ) {

                    // try the string as a key before any manipulation
                    if ( name in thisCache ) {
                        name = [ name ];
                    } else {

                        // split the camel cased version by spaces unless a key with the spaces exists
                        name = jQuery.camelCase( name );
                        if ( name in thisCache ) {
                            name = [ name ];
                        } else {
                            name = name.split(" ");
                        }
                    }
                } else {
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = name.concat( jQuery.map( name, jQuery.camelCase ) );
                }

                i = name.length;
                while ( i-- ) {
                    delete thisCache[ name[i] ];
                }

                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
                    return;
                }
            }
        }

        // See jQuery.data for more information
        if ( !pvt ) {
            delete cache[ id ].data;

            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            if ( !isEmptyDataObject( cache[ id ] ) ) {
                return;
            }
        }

        // Destroy the cache
        if ( isNode ) {
            jQuery.cleanData( [ elem ], true );

            // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
            /* jshint eqeqeq: false */
        } else if ( support.deleteExpando || cache != cache.window ) {
            /* jshint eqeqeq: true */
            delete cache[ id ];

            // When all else fails, null
        } else {
            cache[ id ] = null;
        }
    }

    jQuery.extend({
        cache: {},

        // The following elements (space-suffixed to avoid Object.prototype collisions)
        // throw uncatchable exceptions if you attempt to set expando properties
        noData: {
            "applet ": true,
            "embed ": true,
            // ...but Flash objects (which have this classid) *can* handle expandos
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },

        hasData: function( elem ) {
            elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
            return !!elem && !isEmptyDataObject( elem );
        },

        data: function( elem, name, data ) {
            return internalData( elem, name, data );
        },

        removeData: function( elem, name ) {
            return internalRemoveData( elem, name );
        },

        // For internal use only.
        _data: function( elem, name, data ) {
            return internalData( elem, name, data, true );
        },

        _removeData: function( elem, name ) {
            return internalRemoveData( elem, name, true );
        }
    });

    jQuery.fn.extend({
        data: function( key, value ) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves

            // Gets all values
            if ( key === undefined ) {
                if ( this.length ) {
                    data = jQuery.data( elem );

                    if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
                        i = attrs.length;
                        while ( i-- ) {

                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if ( attrs[ i ] ) {
                                name = attrs[ i ].name;
                                if ( name.indexOf( "data-" ) === 0 ) {
                                    name = jQuery.camelCase( name.slice(5) );
                                    dataAttr( elem, name, data[ name ] );
                                }
                            }
                        }
                        jQuery._data( elem, "parsedAttrs", true );
                    }
                }

                return data;
            }

            // Sets multiple values
            if ( typeof key === "object" ) {
                return this.each(function() {
                    jQuery.data( this, key );
                });
            }

            return arguments.length > 1 ?

                // Sets one value
                this.each(function() {
                    jQuery.data( this, key, value );
                }) :

                // Gets one value
                // Try to fetch any internally stored data first
                elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
        },

        removeData: function( key ) {
            return this.each(function() {
                jQuery.removeData( this, key );
            });
        }
    });


    jQuery.extend({
        queue: function( elem, type, data ) {
            var queue;

            if ( elem ) {
                type = ( type || "fx" ) + "queue";
                queue = jQuery._data( elem, type );

                // Speed up dequeue by getting out quickly if this is just a lookup
                if ( data ) {
                    if ( !queue || jQuery.isArray(data) ) {
                        queue = jQuery._data( elem, type, jQuery.makeArray(data) );
                    } else {
                        queue.push( data );
                    }
                }
                return queue || [];
            }
        },

        dequeue: function( elem, type ) {
            type = type || "fx";

            var queue = jQuery.queue( elem, type ),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks( elem, type ),
                next = function() {
                    jQuery.dequeue( elem, type );
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if ( fn === "inprogress" ) {
                fn = queue.shift();
                startLength--;
            }

            if ( fn ) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if ( type === "fx" ) {
                    queue.unshift( "inprogress" );
                }

                // clear up the last queue stop function
                delete hooks.stop;
                fn.call( elem, next, hooks );
            }

            if ( !startLength && hooks ) {
                hooks.empty.fire();
            }
        },

        // not intended for public consumption - generates a queueHooks object, or returns the current one
        _queueHooks: function( elem, type ) {
            var key = type + "queueHooks";
            return jQuery._data( elem, key ) || jQuery._data( elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData( elem, type + "queue" );
                    jQuery._removeData( elem, key );
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function( type, data ) {
            var setter = 2;

            if ( typeof type !== "string" ) {
                data = type;
                type = "fx";
                setter--;
            }

            if ( arguments.length < setter ) {
                return jQuery.queue( this[0], type );
            }

            return data === undefined ?
                this :
                this.each(function() {
                    var queue = jQuery.queue( this, type, data );

                    // ensure a hooks for this queue
                    jQuery._queueHooks( this, type );

                    if ( type === "fx" && queue[0] !== "inprogress" ) {
                        jQuery.dequeue( this, type );
                    }
                });
        },
        dequeue: function( type ) {
            return this.each(function() {
                jQuery.dequeue( this, type );
            });
        },
        clearQueue: function( type ) {
            return this.queue( type || "fx", [] );
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function( type, obj ) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    if ( !( --count ) ) {
                        defer.resolveWith( elements, [ elements ] );
                    }
                };

            if ( typeof type !== "string" ) {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while ( i-- ) {
                tmp = jQuery._data( elements[ i ], type + "queueHooks" );
                if ( tmp && tmp.empty ) {
                    count++;
                    tmp.empty.add( resolve );
                }
            }
            resolve();
            return defer.promise( obj );
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

    var isHidden = function( elem, el ) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
    };



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
    var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
        var i = 0,
            length = elems.length,
            bulk = key == null;

        // Sets many values
        if ( jQuery.type( key ) === "object" ) {
            chainable = true;
            for ( i in key ) {
                jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
            }

            // Sets one value
        } else if ( value !== undefined ) {
            chainable = true;

            if ( !jQuery.isFunction( value ) ) {
                raw = true;
            }

            if ( bulk ) {
                // Bulk operations run against the entire set
                if ( raw ) {
                    fn.call( elems, value );
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function( elem, key, value ) {
                        return bulk.call( jQuery( elem ), value );
                    };
                }
            }

            if ( fn ) {
                for ( ; i < length; i++ ) {
                    fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
                }
            }
        }

        return chainable ?
            elems :

            // Gets
            bulk ?
                fn.call( elems ) :
                length ? fn( elems[0], key ) : emptyGet;
    };
    var rcheckableType = (/^(?:checkbox|radio)$/i);



    (function() {
        // Minified: var a,b,c
        var input = document.createElement( "input" ),
            div = document.createElement( "div" ),
            fragment = document.createDocumentFragment();

        // Setup
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

        // IE strips leading whitespace when .innerHTML is used
        support.leadingWhitespace = div.firstChild.nodeType === 3;

        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        support.tbody = !div.getElementsByTagName( "tbody" ).length;

        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        support.html5Clone =
            document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        input.type = "checkbox";
        input.checked = true;
        fragment.appendChild( input );
        support.appendChecked = input.checked;

        // Make sure textarea (and checkbox) defaultValue is properly cloned
        // Support: IE6-IE11+
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

        // #11217 - WebKit loses check when the name is after the checked attribute
        fragment.appendChild( div );
        div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

        // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
        // old WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

        // Support: IE<9
        // Opera does not clone events (and typeof div.attachEvent === undefined).
        // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
        support.noCloneEvent = true;
        if ( div.attachEvent ) {
            div.attachEvent( "onclick", function() {
                support.noCloneEvent = false;
            });

            div.cloneNode( true ).click();
        }

        // Execute the test only if not already executed in another module.
        if (support.deleteExpando == null) {
            // Support: IE<9
            support.deleteExpando = true;
            try {
                delete div.test;
            } catch( e ) {
                support.deleteExpando = false;
            }
        }
    })();


    (function() {
        var i, eventName,
            div = document.createElement( "div" );

        // Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
        for ( i in { submit: true, change: true, focusin: true }) {
            eventName = "on" + i;

            if ( !(support[ i + "Bubbles" ] = eventName in window) ) {
                // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
                div.setAttribute( eventName, "t" );
                support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
            }
        }

        // Null elements to avoid leaks in IE.
        div = null;
    })();


    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch ( err ) { }
    }

    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {

        global: {},

        add: function( elem, types, handler, data, selector ) {
            var tmp, events, t, handleObjIn,
                special, eventHandle, handleObj,
                handlers, type, namespaces, origType,
                elemData = jQuery._data( elem );

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if ( !elemData ) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if ( handler.handler ) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if ( !handler.guid ) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if ( !(events = elemData.events) ) {
                events = elemData.events = {};
            }
            if ( !(eventHandle = elemData.handle) ) {
                eventHandle = elemData.handle = function( e ) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
                        jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
                        undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                eventHandle.elem = elem;
            }

            // Handle multiple events separated by a space
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[t] ) || [];
                type = origType = tmp[1];
                namespaces = ( tmp[2] || "" ).split( "." ).sort();

                // There *must* be a type, no attaching namespace-only handlers
                if ( !type ) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[ type ] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = ( selector ? special.delegateType : special.bindType ) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[ type ] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
                    namespace: namespaces.join(".")
                }, handleObjIn );

                // Init the event handler queue if we're the first
                if ( !(handlers = events[ type ]) ) {
                    handlers = events[ type ] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener/attachEvent if the special events handler returns false
                    if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
                        // Bind the global event handler to the element
                        if ( elem.addEventListener ) {
                            elem.addEventListener( type, eventHandle, false );

                        } else if ( elem.attachEvent ) {
                            elem.attachEvent( "on" + type, eventHandle );
                        }
                    }
                }

                if ( special.add ) {
                    special.add.call( elem, handleObj );

                    if ( !handleObj.handler.guid ) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if ( selector ) {
                    handlers.splice( handlers.delegateCount++, 0, handleObj );
                } else {
                    handlers.push( handleObj );
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[ type ] = true;
            }

            // Nullify elem to prevent memory leaks in IE
            elem = null;
        },

        // Detach an event or set of events from an element
        remove: function( elem, types, handler, selector, mappedTypes ) {
            var j, handleObj, tmp,
                origCount, t, events,
                special, handlers, type,
                namespaces, origType,
                elemData = jQuery.hasData( elem ) && jQuery._data( elem );

            if ( !elemData || !(events = elemData.events) ) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = ( types || "" ).match( rnotwhite ) || [ "" ];
            t = types.length;
            while ( t-- ) {
                tmp = rtypenamespace.exec( types[t] ) || [];
                type = origType = tmp[1];
                namespaces = ( tmp[2] || "" ).split( "." ).sort();

                // Unbind all events (on this namespace, if provided) for the element
                if ( !type ) {
                    for ( type in events ) {
                        jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
                    }
                    continue;
                }

                special = jQuery.event.special[ type ] || {};
                type = ( selector ? special.delegateType : special.bindType ) || type;
                handlers = events[ type ] || [];
                tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

                // Remove matching events
                origCount = j = handlers.length;
                while ( j-- ) {
                    handleObj = handlers[ j ];

                    if ( ( mappedTypes || origType === handleObj.origType ) &&
                        ( !handler || handler.guid === handleObj.guid ) &&
                        ( !tmp || tmp.test( handleObj.namespace ) ) &&
                        ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
                        handlers.splice( j, 1 );

                        if ( handleObj.selector ) {
                            handlers.delegateCount--;
                        }
                        if ( special.remove ) {
                            special.remove.call( elem, handleObj );
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if ( origCount && !handlers.length ) {
                    if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
                        jQuery.removeEvent( elem, type, elemData.handle );
                    }

                    delete events[ type ];
                }
            }

            // Remove the expando if it's no longer used
            if ( jQuery.isEmptyObject( events ) ) {
                delete elemData.handle;

                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                jQuery._removeData( elem, "events" );
            }
        },

        trigger: function( event, data, elem, onlyHandlers ) {
            var handle, ontype, cur,
                bubbleType, special, tmp, i,
                eventPath = [ elem || document ],
                type = hasOwn.call( event, "type" ) ? event.type : event,
                namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

            cur = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
                return;
            }

            if ( type.indexOf(".") >= 0 ) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[ jQuery.expando ] ?
                event :
                new jQuery.Event( type, typeof event === "object" && event );

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ?
                new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if ( !event.target ) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [ event ] :
                jQuery.makeArray( data, [ event ] );

            // Allow special events to draw outside the lines
            special = jQuery.event.special[ type ] || {};
            if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

                bubbleType = special.delegateType || type;
                if ( !rfocusMorph.test( bubbleType + type ) ) {
                    cur = cur.parentNode;
                }
                for ( ; cur; cur = cur.parentNode ) {
                    eventPath.push( cur );
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if ( tmp === (elem.ownerDocument || document) ) {
                    eventPath.push( tmp.defaultView || tmp.parentWindow || window );
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

                event.type = i > 1 ?
                    bubbleType :
                special.bindType || type;

                // jQuery handler
                handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
                if ( handle ) {
                    handle.apply( cur, data );
                }

                // Native handler
                handle = ontype && cur[ ontype ];
                if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
                    event.result = handle.apply( cur, data );
                    if ( event.result === false ) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if ( !onlyHandlers && !event.isDefaultPrevented() ) {

                if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
                    jQuery.acceptData( elem ) ) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ ontype ];

                        if ( tmp ) {
                            elem[ ontype ] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        try {
                            elem[ type ]();
                        } catch ( e ) {
                            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                        }
                        jQuery.event.triggered = undefined;

                        if ( tmp ) {
                            elem[ ontype ] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        dispatch: function( event ) {

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix( event );

            var i, ret, handleObj, matched, j,
                handlerQueue = [],
                args = slice.call( arguments ),
                handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
                special = jQuery.event.special[ event.type ] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call( this, event, handlers );

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
                event.currentTarget = matched.elem;

                j = 0;
                while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

                    // Triggered event must either 1) have no namespace, or
                    // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                    if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
                            .apply( matched.elem, args );

                        if ( ret !== undefined ) {
                            if ( (event.result = ret) === false ) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if ( special.postDispatch ) {
                special.postDispatch.call( this, event );
            }

            return event.result;
        },

        handlers: function( event, handlers ) {
            var sel, handleObj, matches, i,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

                /* jshint eqeqeq: false */
                for ( ; cur != this; cur = cur.parentNode || this ) {
                    /* jshint eqeqeq: true */

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
                        matches = [];
                        for ( i = 0; i < delegateCount; i++ ) {
                            handleObj = handlers[ i ];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if ( matches[ sel ] === undefined ) {
                                matches[ sel ] = handleObj.needsContext ?
                                jQuery( sel, this ).index( cur ) >= 0 :
                                    jQuery.find( sel, this, null, [ cur ] ).length;
                            }
                            if ( matches[ sel ] ) {
                                matches.push( handleObj );
                            }
                        }
                        if ( matches.length ) {
                            handlerQueue.push({ elem: cur, handlers: matches });
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            if ( delegateCount < handlers.length ) {
                handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
            }

            return handlerQueue;
        },

        fix: function( event ) {
            if ( event[ jQuery.expando ] ) {
                return event;
            }

            // Create a writable copy of the event object and normalize some properties
            var i, prop, copy,
                type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[ type ];

            if ( !fixHook ) {
                this.fixHooks[ type ] = fixHook =
                    rmouseEvent.test( type ) ? this.mouseHooks :
                        rkeyEvent.test( type ) ? this.keyHooks :
                        {};
            }
            copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

            event = new jQuery.Event( originalEvent );

            i = copy.length;
            while ( i-- ) {
                prop = copy[ i ];
                event[ prop ] = originalEvent[ prop ];
            }

            // Support: IE<9
            // Fix target property (#1925)
            if ( !event.target ) {
                event.target = originalEvent.srcElement || document;
            }

            // Support: Chrome 23+, Safari?
            // Target should not be a text node (#504, #13143)
            if ( event.target.nodeType === 3 ) {
                event.target = event.target.parentNode;
            }

            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            event.metaKey = !!event.metaKey;

            return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
        },

        // Includes some event props shared by KeyEvent and MouseEvent
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

        fixHooks: {},

        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function( event, original ) {

                // Add which for key events
                if ( event.which == null ) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }

                return event;
            }
        },

        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function( event, original ) {
                var body, eventDoc, doc,
                    button = original.button,
                    fromElement = original.fromElement;

                // Calculate pageX/Y if missing and clientX/Y available
                if ( event.pageX == null && original.clientX != null ) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;

                    event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                    event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
                }

                // Add relatedTarget, if necessary
                if ( !event.relatedTarget && fromElement ) {
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if ( !event.which && button !== undefined ) {
                    event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                }

                return event;
            }
        },

        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function() {
                    if ( this !== safeActiveElement() && this.focus ) {
                        try {
                            this.focus();
                            return false;
                        } catch ( e ) {
                            // Support: IE<9
                            // If we error on focus to hidden element (#1486, #12518),
                            // let .trigger() run the handlers
                        }
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if ( this === safeActiveElement() && this.blur ) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function() {
                    if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
                        this.click();
                        return false;
                    }
                },

                // For cross-browser consistency, don't fire native .click() on links
                _default: function( event ) {
                    return jQuery.nodeName( event.target, "a" );
                }
            },

            beforeunload: {
                postDispatch: function( event ) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if ( event.result !== undefined && event.originalEvent ) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },

        simulate: function( type, elem, event, bubble ) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true,
                    originalEvent: {}
                }
            );
            if ( bubble ) {
                jQuery.event.trigger( e, null, elem );
            } else {
                jQuery.event.dispatch.call( elem, e );
            }
            if ( e.isDefaultPrevented() ) {
                event.preventDefault();
            }
        }
    };

    jQuery.removeEvent = document.removeEventListener ?
        function( elem, type, handle ) {
            if ( elem.removeEventListener ) {
                elem.removeEventListener( type, handle, false );
            }
        } :
        function( elem, type, handle ) {
            var name = "on" + type;

            if ( elem.detachEvent ) {

                // #8545, #7054, preventing memory leaks for custom events in IE6-8
                // detachEvent needed property on element, by name of that event, to properly expose it to GC
                if ( typeof elem[ name ] === strundefined ) {
                    elem[ name ] = null;
                }

                elem.detachEvent( name, handle );
            }
        };

    jQuery.Event = function( src, props ) {
        // Allow instantiation without the 'new' keyword
        if ( !(this instanceof jQuery.Event) ) {
            return new jQuery.Event( src, props );
        }

        // Event object
        if ( src && src.type ) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&
                // Support: IE < 9, Android < 4.0
            src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if ( props ) {
            jQuery.extend( this, props );
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[ jQuery.expando ] = true;
    };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,

        preventDefault: function() {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;
            if ( !e ) {
                return;
            }

            // If preventDefault exists, run it on the original event
            if ( e.preventDefault ) {
                e.preventDefault();

                // Support: IE
                // Otherwise set the returnValue property of the original event to false
            } else {
                e.returnValue = false;
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;
            if ( !e ) {
                return;
            }
            // If stopPropagation exists, run it on the original event
            if ( e.stopPropagation ) {
                e.stopPropagation();
            }

            // Support: IE
            // Set the cancelBubble property of the original event to true
            e.cancelBubble = true;
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if ( e && e.stopImmediatePropagation ) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

// Create mouseenter/leave events using mouseover/out and event-time checks
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function( orig, fix ) {
        jQuery.event.special[ orig ] = {
            delegateType: fix,
            bindType: fix,

            handle: function( event ) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply( this, arguments );
                    event.type = fix;
                }
                return ret;
            }
        };
    });

// IE submit delegation
    if ( !support.submitBubbles ) {

        jQuery.event.special.submit = {
            setup: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Lazy-add a submit handler when a descendant form may potentially be submitted
                jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
                    // Node name check avoids a VML-related crash in IE (#9807)
                    var elem = e.target,
                        form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
                    if ( form && !jQuery._data( form, "submitBubbles" ) ) {
                        jQuery.event.add( form, "submit._submit", function( event ) {
                            event._submit_bubble = true;
                        });
                        jQuery._data( form, "submitBubbles", true );
                    }
                });
                // return undefined since we don't need an event listener
            },

            postDispatch: function( event ) {
                // If form was submitted by the user, bubble the event up the tree
                if ( event._submit_bubble ) {
                    delete event._submit_bubble;
                    if ( this.parentNode && !event.isTrigger ) {
                        jQuery.event.simulate( "submit", this.parentNode, event, true );
                    }
                }
            },

            teardown: function() {
                // Only need this for delegated form submit events
                if ( jQuery.nodeName( this, "form" ) ) {
                    return false;
                }

                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                jQuery.event.remove( this, "._submit" );
            }
        };
    }

// IE change delegation and checkbox/radio fix
    if ( !support.changeBubbles ) {

        jQuery.event.special.change = {

            setup: function() {

                if ( rformElems.test( this.nodeName ) ) {
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    if ( this.type === "checkbox" || this.type === "radio" ) {
                        jQuery.event.add( this, "propertychange._change", function( event ) {
                            if ( event.originalEvent.propertyName === "checked" ) {
                                this._just_changed = true;
                            }
                        });
                        jQuery.event.add( this, "click._change", function( event ) {
                            if ( this._just_changed && !event.isTrigger ) {
                                this._just_changed = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            jQuery.event.simulate( "change", this, event, true );
                        });
                    }
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                jQuery.event.add( this, "beforeactivate._change", function( e ) {
                    var elem = e.target;

                    if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
                        jQuery.event.add( elem, "change._change", function( event ) {
                            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
                                jQuery.event.simulate( "change", this.parentNode, event, true );
                            }
                        });
                        jQuery._data( elem, "changeBubbles", true );
                    }
                });
            },

            handle: function( event ) {
                var elem = event.target;

                // Swallow native change events from checkbox/radio, we already triggered them above
                if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
                    return event.handleObj.handler.apply( this, arguments );
                }
            },

            teardown: function() {
                jQuery.event.remove( this, "._change" );

                return !rformElems.test( this.nodeName );
            }
        };
    }

// Create "bubbling" focus and blur events
    if ( !support.focusinBubbles ) {
        jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function( event ) {
                jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
            };

            jQuery.event.special[ fix ] = {
                setup: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data( doc, fix );

                    if ( !attaches ) {
                        doc.addEventListener( orig, handler, true );
                    }
                    jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
                },
                teardown: function() {
                    var doc = this.ownerDocument || this,
                        attaches = jQuery._data( doc, fix ) - 1;

                    if ( !attaches ) {
                        doc.removeEventListener( orig, handler, true );
                        jQuery._removeData( doc, fix );
                    } else {
                        jQuery._data( doc, fix, attaches );
                    }
                }
            };
        });
    }

    jQuery.fn.extend({

        on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
            var type, origFn;

            // Types can be a map of types/handlers
            if ( typeof types === "object" ) {
                // ( types-Object, selector, data )
                if ( typeof selector !== "string" ) {
                    // ( types-Object, data )
                    data = data || selector;
                    selector = undefined;
                }
                for ( type in types ) {
                    this.on( type, selector, data, types[ type ], one );
                }
                return this;
            }

            if ( data == null && fn == null ) {
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
            } else if ( fn == null ) {
                if ( typeof selector === "string" ) {
                    // ( types, selector, fn )
                    fn = data;
                    data = undefined;
                } else {
                    // ( types, data, fn )
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if ( fn === false ) {
                fn = returnFalse;
            } else if ( !fn ) {
                return this;
            }

            if ( one === 1 ) {
                origFn = fn;
                fn = function( event ) {
                    // Can use an empty set, since event contains the info
                    jQuery().off( event );
                    return origFn.apply( this, arguments );
                };
                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
            }
            return this.each( function() {
                jQuery.event.add( this, types, fn, data, selector );
            });
        },
        one: function( types, selector, data, fn ) {
            return this.on( types, selector, data, fn, 1 );
        },
        off: function( types, selector, fn ) {
            var handleObj, type;
            if ( types && types.preventDefault && types.handleObj ) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery( types.delegateTarget ).off(
                    handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if ( typeof types === "object" ) {
                // ( types-object [, selector] )
                for ( type in types ) {
                    this.off( type, selector, types[ type ] );
                }
                return this;
            }
            if ( selector === false || typeof selector === "function" ) {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if ( fn === false ) {
                fn = returnFalse;
            }
            return this.each(function() {
                jQuery.event.remove( this, types, fn, selector );
            });
        },

        trigger: function( type, data ) {
            return this.each(function() {
                jQuery.event.trigger( type, data, this );
            });
        },
        triggerHandler: function( type, data ) {
            var elem = this[0];
            if ( elem ) {
                return jQuery.event.trigger( type, data, elem, true );
            }
        }
    });


    function createSafeFragment( document ) {
        var list = nodeNames.split( "|" ),
            safeFrag = document.createDocumentFragment();

        if ( safeFrag.createElement ) {
            while ( list.length ) {
                safeFrag.createElement(
                    list.pop()
                );
            }
        }
        return safeFrag;
    }

    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
            "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rleadingWhitespace = /^\s+/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rtbody = /<tbody/i,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
    // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

    // We have to close these tags to support XHTML (#13200)
        wrapMap = {
            option: [ 1, "<select multiple='multiple'>", "</select>" ],
            legend: [ 1, "<fieldset>", "</fieldset>" ],
            area: [ 1, "<map>", "</map>" ],
            param: [ 1, "<object>", "</object>" ],
            thead: [ 1, "<table>", "</table>" ],
            tr: [ 2, "<table><tbody>", "</tbody></table>" ],
            col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
            td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

            // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
            // unless wrapped in a div with non-breaking characters in front of it.
            _default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
        },
        safeFragment = createSafeFragment( document ),
        fragmentDiv = safeFragment.appendChild( document.createElement("div") );

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll( context, tag ) {
        var elems, elem,
            i = 0,
            found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
                typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
                    undefined;

        if ( !found ) {
            for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
                if ( !tag || jQuery.nodeName( elem, tag ) ) {
                    found.push( elem );
                } else {
                    jQuery.merge( found, getAll( elem, tag ) );
                }
            }
        }

        return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
            jQuery.merge( [ context ], found ) :
            found;
    }

// Used in buildFragment, fixes the defaultChecked property
    function fixDefaultChecked( elem ) {
        if ( rcheckableType.test( elem.type ) ) {
            elem.defaultChecked = elem.checked;
        }
    }

// Support: IE<8
// Manipulating tables requires a tbody
    function manipulationTarget( elem, content ) {
        return jQuery.nodeName( elem, "table" ) &&
        jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

        elem.getElementsByTagName("tbody")[0] ||
        elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
            elem;
    }

// Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript( elem ) {
        elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript( elem ) {
        var match = rscriptTypeMasked.exec( elem.type );
        if ( match ) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }
        return elem;
    }

// Mark scripts as having already been evaluated
    function setGlobalEval( elems, refElements ) {
        var elem,
            i = 0;
        for ( ; (elem = elems[i]) != null; i++ ) {
            jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
        }
    }

    function cloneCopyEvent( src, dest ) {

        if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
            return;
        }

        var type, i, l,
            oldData = jQuery._data( src ),
            curData = jQuery._data( dest, oldData ),
            events = oldData.events;

        if ( events ) {
            delete curData.handle;
            curData.events = {};

            for ( type in events ) {
                for ( i = 0, l = events[ type ].length; i < l; i++ ) {
                    jQuery.event.add( dest, type, events[ type ][ i ] );
                }
            }
        }

        // make the cloned public data object a copy from the original
        if ( curData.data ) {
            curData.data = jQuery.extend( {}, curData.data );
        }
    }

    function fixCloneNodeIssues( src, dest ) {
        var nodeName, e, data;

        // We do not need to do anything for non-Elements
        if ( dest.nodeType !== 1 ) {
            return;
        }

        nodeName = dest.nodeName.toLowerCase();

        // IE6-8 copies events bound via attachEvent when using cloneNode.
        if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
            data = jQuery._data( dest );

            for ( e in data.events ) {
                jQuery.removeEvent( dest, e, data.handle );
            }

            // Event data gets referenced instead of copied if the expando gets copied too
            dest.removeAttribute( jQuery.expando );
        }

        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        if ( nodeName === "script" && dest.text !== src.text ) {
            disableScript( dest ).text = src.text;
            restoreScript( dest );

            // IE6-10 improperly clones children of object elements using classid.
            // IE10 throws NoModificationAllowedError if parent is null, #12132.
        } else if ( nodeName === "object" ) {
            if ( dest.parentNode ) {
                dest.outerHTML = src.outerHTML;
            }

            // This path appears unavoidable for IE9. When cloning an object
            // element in IE9, the outerHTML strategy above is not sufficient.
            // If the src has innerHTML and the destination does not,
            // copy the src.innerHTML into the dest.innerHTML. #10324
            if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
                dest.innerHTML = src.innerHTML;
            }

        } else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
            // IE6-8 fails to persist the checked state of a cloned checkbox
            // or radio button. Worse, IE6-7 fail to give the cloned element
            // a checked appearance if the defaultChecked value isn't also set

            dest.defaultChecked = dest.checked = src.checked;

            // IE6-7 get confused and end up setting the value of a cloned
            // checkbox/radio button to an empty string instead of "on"
            if ( dest.value !== src.value ) {
                dest.value = src.value;
            }

            // IE6-8 fails to return the selected option to the default selected
            // state when cloning options
        } else if ( nodeName === "option" ) {
            dest.defaultSelected = dest.selected = src.defaultSelected;

            // IE6-8 fails to set the defaultValue to the correct value when
            // cloning other types of input fields
        } else if ( nodeName === "input" || nodeName === "textarea" ) {
            dest.defaultValue = src.defaultValue;
        }
    }

    jQuery.extend({
        clone: function( elem, dataAndEvents, deepDataAndEvents ) {
            var destElements, node, clone, i, srcElements,
                inPage = jQuery.contains( elem.ownerDocument, elem );

            if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
                clone = elem.cloneNode( true );

                // IE<=8 does not properly clone detached, unknown element nodes
            } else {
                fragmentDiv.innerHTML = elem.outerHTML;
                fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
            }

            if ( (!support.noCloneEvent || !support.noCloneChecked) &&
                (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll( clone );
                srcElements = getAll( elem );

                // Fix all IE cloning issues
                for ( i = 0; (node = srcElements[i]) != null; ++i ) {
                    // Ensure that the destination node is not null; Fixes #9587
                    if ( destElements[i] ) {
                        fixCloneNodeIssues( node, destElements[i] );
                    }
                }
            }

            // Copy the events from the original to the clone
            if ( dataAndEvents ) {
                if ( deepDataAndEvents ) {
                    srcElements = srcElements || getAll( elem );
                    destElements = destElements || getAll( clone );

                    for ( i = 0; (node = srcElements[i]) != null; i++ ) {
                        cloneCopyEvent( node, destElements[i] );
                    }
                } else {
                    cloneCopyEvent( elem, clone );
                }
            }

            // Preserve script evaluation history
            destElements = getAll( clone, "script" );
            if ( destElements.length > 0 ) {
                setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
            }

            destElements = srcElements = node = null;

            // Return the cloned set
            return clone;
        },

        buildFragment: function( elems, context, scripts, selection ) {
            var j, elem, contains,
                tmp, tag, tbody, wrap,
                l = elems.length,

            // Ensure a safe fragment
                safe = createSafeFragment( context ),

                nodes = [],
                i = 0;

            for ( ; i < l; i++ ) {
                elem = elems[ i ];

                if ( elem || elem === 0 ) {

                    // Add nodes directly
                    if ( jQuery.type( elem ) === "object" ) {
                        jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

                        // Convert non-html into a text node
                    } else if ( !rhtml.test( elem ) ) {
                        nodes.push( context.createTextNode( elem ) );

                        // Convert html into DOM nodes
                    } else {
                        tmp = tmp || safe.appendChild( context.createElement("div") );

                        // Deserialize a standard representation
                        tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
                        wrap = wrapMap[ tag ] || wrapMap._default;

                        tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

                        // Descend through wrappers to the right content
                        j = wrap[0];
                        while ( j-- ) {
                            tmp = tmp.lastChild;
                        }

                        // Manually add leading whitespace removed by IE
                        if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
                            nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
                        }

                        // Remove IE's autoinserted <tbody> from table fragments
                        if ( !support.tbody ) {

                            // String was a <table>, *may* have spurious <tbody>
                            elem = tag === "table" && !rtbody.test( elem ) ?
                                tmp.firstChild :

                                // String was a bare <thead> or <tfoot>
                                wrap[1] === "<table>" && !rtbody.test( elem ) ?
                                    tmp :
                                    0;

                            j = elem && elem.childNodes.length;
                            while ( j-- ) {
                                if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
                                    elem.removeChild( tbody );
                                }
                            }
                        }

                        jQuery.merge( nodes, tmp.childNodes );

                        // Fix #12392 for WebKit and IE > 9
                        tmp.textContent = "";

                        // Fix #12392 for oldIE
                        while ( tmp.firstChild ) {
                            tmp.removeChild( tmp.firstChild );
                        }

                        // Remember the top-level container for proper cleanup
                        tmp = safe.lastChild;
                    }
                }
            }

            // Fix #11356: Clear elements from fragment
            if ( tmp ) {
                safe.removeChild( tmp );
            }

            // Reset defaultChecked for any radios and checkboxes
            // about to be appended to the DOM in IE 6/7 (#8060)
            if ( !support.appendChecked ) {
                jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
            }

            i = 0;
            while ( (elem = nodes[ i++ ]) ) {

                // #4087 - If origin and destination elements are the same, and this is
                // that element, do not do anything
                if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
                    continue;
                }

                contains = jQuery.contains( elem.ownerDocument, elem );

                // Append to fragment
                tmp = getAll( safe.appendChild( elem ), "script" );

                // Preserve script evaluation history
                if ( contains ) {
                    setGlobalEval( tmp );
                }

                // Capture executables
                if ( scripts ) {
                    j = 0;
                    while ( (elem = tmp[ j++ ]) ) {
                        if ( rscriptType.test( elem.type || "" ) ) {
                            scripts.push( elem );
                        }
                    }
                }
            }

            tmp = null;

            return safe;
        },

        cleanData: function( elems, /* internal */ acceptData ) {
            var elem, type, id, data,
                i = 0,
                internalKey = jQuery.expando,
                cache = jQuery.cache,
                deleteExpando = support.deleteExpando,
                special = jQuery.event.special;

            for ( ; (elem = elems[i]) != null; i++ ) {
                if ( acceptData || jQuery.acceptData( elem ) ) {

                    id = elem[ internalKey ];
                    data = id && cache[ id ];

                    if ( data ) {
                        if ( data.events ) {
                            for ( type in data.events ) {
                                if ( special[ type ] ) {
                                    jQuery.event.remove( elem, type );

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent( elem, type, data.handle );
                                }
                            }
                        }

                        // Remove cache only if it was not already removed by jQuery.event.remove
                        if ( cache[ id ] ) {

                            delete cache[ id ];

                            // IE does not allow us to delete expando properties from nodes,
                            // nor does it have a removeAttribute function on Document nodes;
                            // we must handle all of these cases
                            if ( deleteExpando ) {
                                delete elem[ internalKey ];

                            } else if ( typeof elem.removeAttribute !== strundefined ) {
                                elem.removeAttribute( internalKey );

                            } else {
                                elem[ internalKey ] = null;
                            }

                            deletedIds.push( id );
                        }
                    }
                }
            }
        }
    });

    jQuery.fn.extend({
        text: function( value ) {
            return access( this, function( value ) {
                return value === undefined ?
                    jQuery.text( this ) :
                    this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
            }, null, value, arguments.length );
        },

        append: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.appendChild( elem );
                }
            });
        },

        prepend: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
                    var target = manipulationTarget( this, elem );
                    target.insertBefore( elem, target.firstChild );
                }
            });
        },

        before: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this );
                }
            });
        },

        after: function() {
            return this.domManip( arguments, function( elem ) {
                if ( this.parentNode ) {
                    this.parentNode.insertBefore( elem, this.nextSibling );
                }
            });
        },

        remove: function( selector, keepData /* Internal Use Only */ ) {
            var elem,
                elems = selector ? jQuery.filter( selector, this ) : this,
                i = 0;

            for ( ; (elem = elems[i]) != null; i++ ) {

                if ( !keepData && elem.nodeType === 1 ) {
                    jQuery.cleanData( getAll( elem ) );
                }

                if ( elem.parentNode ) {
                    if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
                        setGlobalEval( getAll( elem, "script" ) );
                    }
                    elem.parentNode.removeChild( elem );
                }
            }

            return this;
        },

        empty: function() {
            var elem,
                i = 0;

            for ( ; (elem = this[i]) != null; i++ ) {
                // Remove element nodes and prevent memory leaks
                if ( elem.nodeType === 1 ) {
                    jQuery.cleanData( getAll( elem, false ) );
                }

                // Remove any remaining nodes
                while ( elem.firstChild ) {
                    elem.removeChild( elem.firstChild );
                }

                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
                    elem.options.length = 0;
                }
            }

            return this;
        },

        clone: function( dataAndEvents, deepDataAndEvents ) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function() {
                return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
            });
        },

        html: function( value ) {
            return access( this, function( value ) {
                var elem = this[ 0 ] || {},
                    i = 0,
                    l = this.length;

                if ( value === undefined ) {
                    return elem.nodeType === 1 ?
                        elem.innerHTML.replace( rinlinejQuery, "" ) :
                        undefined;
                }

                // See if we can take a shortcut and just use innerHTML
                if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
                    ( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
                    ( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
                    !wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

                    value = value.replace( rxhtmlTag, "<$1></$2>" );

                    try {
                        for (; i < l; i++ ) {
                            // Remove element nodes and prevent memory leaks
                            elem = this[i] || {};
                            if ( elem.nodeType === 1 ) {
                                jQuery.cleanData( getAll( elem, false ) );
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch(e) {}
                }

                if ( elem ) {
                    this.empty().append( value );
                }
            }, null, value, arguments.length );
        },

        replaceWith: function() {
            var arg = arguments[ 0 ];

            // Make the changes, replacing each context element with the new content
            this.domManip( arguments, function( elem ) {
                arg = this.parentNode;

                jQuery.cleanData( getAll( this ) );

                if ( arg ) {
                    arg.replaceChild( elem, this );
                }
            });

            // Force removal if there was no new content (e.g., from empty arguments)
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },

        detach: function( selector ) {
            return this.remove( selector, true );
        },

        domManip: function( args, callback ) {

            // Flatten any nested arrays
            args = concat.apply( [], args );

            var first, node, hasScripts,
                scripts, doc, fragment,
                i = 0,
                l = this.length,
                set = this,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction( value );

            // We can't cloneNode fragments that contain checked, in WebKit
            if ( isFunction ||
                ( l > 1 && typeof value === "string" &&
                !support.checkClone && rchecked.test( value ) ) ) {
                return this.each(function( index ) {
                    var self = set.eq( index );
                    if ( isFunction ) {
                        args[0] = value.call( this, index, self.html() );
                    }
                    self.domManip( args, callback );
                });
            }

            if ( l ) {
                fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
                first = fragment.firstChild;

                if ( fragment.childNodes.length === 1 ) {
                    fragment = first;
                }

                if ( first ) {
                    scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
                    hasScripts = scripts.length;

                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    for ( ; i < l; i++ ) {
                        node = fragment;

                        if ( i !== iNoClone ) {
                            node = jQuery.clone( node, true, true );

                            // Keep references to cloned scripts for later restoration
                            if ( hasScripts ) {
                                jQuery.merge( scripts, getAll( node, "script" ) );
                            }
                        }

                        callback.call( this[i], node, i );
                    }

                    if ( hasScripts ) {
                        doc = scripts[ scripts.length - 1 ].ownerDocument;

                        // Reenable scripts
                        jQuery.map( scripts, restoreScript );

                        // Evaluate executable scripts on first document insertion
                        for ( i = 0; i < hasScripts; i++ ) {
                            node = scripts[ i ];
                            if ( rscriptType.test( node.type || "" ) &&
                                !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

                                if ( node.src ) {
                                    // Optional AJAX dependency, but won't run scripts if not present
                                    if ( jQuery._evalUrl ) {
                                        jQuery._evalUrl( node.src );
                                    }
                                } else {
                                    jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
                                }
                            }
                        }
                    }

                    // Fix #11809: Avoid leaking memory
                    fragment = first = null;
                }
            }

            return this;
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function( name, original ) {
        jQuery.fn[ name ] = function( selector ) {
            var elems,
                i = 0,
                ret = [],
                insert = jQuery( selector ),
                last = insert.length - 1;

            for ( ; i <= last; i++ ) {
                elems = i === last ? this : this.clone(true);
                jQuery( insert[i] )[ original ]( elems );

                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                push.apply( ret, elems.get() );
            }

            return this.pushStack( ret );
        };
    });


    var iframe,
        elemdisplay = {};

    /**
     * Retrieve the actual display of a element
     * @param {String} name nodeName of the element
     * @param {Object} doc Document object
     */
// Called only from within defaultDisplay
    function actualDisplay( name, doc ) {
        var style,
            elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

        // getDefaultComputedStyle might be reliably used only on attached element
            display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

                // Use of this method is a temporary fix (more like optmization) until something better comes along,
                // since it was removed from specification and supported only in FF
                style.display : jQuery.css( elem[ 0 ], "display" );

        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();

        return display;
    }

    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */
    function defaultDisplay( nodeName ) {
        var doc = document,
            display = elemdisplay[ nodeName ];

        if ( !display ) {
            display = actualDisplay( nodeName, doc );

            // If the simple way fails, read from inside an iframe
            if ( display === "none" || !display ) {

                // Use the already-created iframe if possible
                iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

                // Support: IE
                doc.write();
                doc.close();

                display = actualDisplay( nodeName, doc );
                iframe.detach();
            }

            // Store the correct default display
            elemdisplay[ nodeName ] = display;
        }

        return display;
    }


    (function() {
        var shrinkWrapBlocksVal;

        support.shrinkWrapBlocks = function() {
            if ( shrinkWrapBlocksVal != null ) {
                return shrinkWrapBlocksVal;
            }

            // Will be changed later if needed.
            shrinkWrapBlocksVal = false;

            // Minified: var b,c,d
            var div, body, container;

            body = document.getElementsByTagName( "body" )[ 0 ];
            if ( !body || !body.style ) {
                // Test fired too early or in an unsupported environment, exit.
                return;
            }

            // Setup
            div = document.createElement( "div" );
            container = document.createElement( "div" );
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild( container ).appendChild( div );

            // Support: IE6
            // Check if elements with layout shrink-wrap their children
            if ( typeof div.style.zoom !== strundefined ) {
                // Reset CSS: box-sizing; display; margin; border
                div.style.cssText =
                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;" +
                    "padding:1px;width:1px;zoom:1";
                div.appendChild( document.createElement( "div" ) ).style.width = "5px";
                shrinkWrapBlocksVal = div.offsetWidth !== 3;
            }

            body.removeChild( container );

            return shrinkWrapBlocksVal;
        };

    })();
    var rmargin = (/^margin/);

    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



    var getStyles, curCSS,
        rposition = /^(top|right|bottom|left)$/;

    if ( window.getComputedStyle ) {
        getStyles = function( elem ) {
            return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
        };

        curCSS = function( elem, name, computed ) {
            var width, minWidth, maxWidth, ret,
                style = elem.style;

            computed = computed || getStyles( elem );

            // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

            if ( computed ) {

                if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
                    ret = jQuery.style( elem, name );
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

                    // Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;

                    // Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;

                    // Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "";
        };
    } else if ( document.documentElement.currentStyle ) {
        getStyles = function( elem ) {
            return elem.currentStyle;
        };

        curCSS = function( elem, name, computed ) {
            var left, rs, rsLeft, ret,
                style = elem.style;

            computed = computed || getStyles( elem );
            ret = computed ? computed[ name ] : undefined;

            // Avoid setting ret to empty string here
            // so we don't default to auto
            if ( ret == null && style && style[ name ] ) {
                ret = style[ name ];
            }

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are proportional to the parent element instead
            // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
            if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

                // Remember the original values
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;

                // Put in the new values to get a computed value out
                if ( rsLeft ) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if ( rsLeft ) {
                    rs.left = rsLeft;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "" || "auto";
        };
    }




    function addGetHookIf( conditionFn, hookFn ) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                var condition = conditionFn();

                if ( condition == null ) {
                    // The test was not ready at this point; screw the hook this time
                    // but check again when needed next time.
                    return;
                }

                if ( condition ) {
                    // Hook not needed (or it's not possible to use it due to missing dependency),
                    // remove it.
                    // Since there are no other hooks for marginRight, remove the whole object.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.

                return (this.get = hookFn).apply( this, arguments );
            }
        };
    }


    (function() {
        // Minified: var b,c,d,e,f,g, h,i
        var div, style, a, pixelPositionVal, boxSizingReliableVal,
            reliableHiddenOffsetsVal, reliableMarginRightVal;

        // Setup
        div = document.createElement( "div" );
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName( "a" )[ 0 ];
        style = a && a.style;

        // Finish early in limited (non-browser) environments
        if ( !style ) {
            return;
        }

        style.cssText = "float:left;opacity:.5";

        // Support: IE<9
        // Make sure that element opacity exists (as opposed to filter)
        support.opacity = style.opacity === "0.5";

        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        support.cssFloat = !!style.cssFloat;

        div.style.backgroundClip = "content-box";
        div.cloneNode( true ).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
        style.WebkitBoxSizing === "";

        jQuery.extend(support, {
            reliableHiddenOffsets: function() {
                if ( reliableHiddenOffsetsVal == null ) {
                    computeStyleTests();
                }
                return reliableHiddenOffsetsVal;
            },

            boxSizingReliable: function() {
                if ( boxSizingReliableVal == null ) {
                    computeStyleTests();
                }
                return boxSizingReliableVal;
            },

            pixelPosition: function() {
                if ( pixelPositionVal == null ) {
                    computeStyleTests();
                }
                return pixelPositionVal;
            },

            // Support: Android 2.3
            reliableMarginRight: function() {
                if ( reliableMarginRightVal == null ) {
                    computeStyleTests();
                }
                return reliableMarginRightVal;
            }
        });

        function computeStyleTests() {
            // Minified: var b,c,d,j
            var div, body, container, contents;

            body = document.getElementsByTagName( "body" )[ 0 ];
            if ( !body || !body.style ) {
                // Test fired too early or in an unsupported environment, exit.
                return;
            }

            // Setup
            div = document.createElement( "div" );
            container = document.createElement( "div" );
            container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            body.appendChild( container ).appendChild( div );

            div.style.cssText =
                // Support: Firefox<29, Android 2.3
                // Vendor-prefix box-sizing
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
                "box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
                "border:1px;padding:1px;width:4px;position:absolute";

            // Support: IE<9
            // Assume reasonable values in the absence of getComputedStyle
            pixelPositionVal = boxSizingReliableVal = false;
            reliableMarginRightVal = true;

            // Check for getComputedStyle so that this code is not run in IE<9.
            if ( window.getComputedStyle ) {
                pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
                boxSizingReliableVal =
                    ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

                // Support: Android 2.3
                // Div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container (#3333)
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                contents = div.appendChild( document.createElement( "div" ) );

                // Reset CSS: box-sizing; display; margin; border; padding
                contents.style.cssText = div.style.cssText =
                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
                    "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                contents.style.marginRight = contents.style.width = "0";
                div.style.width = "1px";

                reliableMarginRightVal =
                    !parseFloat( ( window.getComputedStyle( contents, null ) || {} ).marginRight );
            }

            // Support: IE8
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            contents = div.getElementsByTagName( "td" );
            contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
            reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
            if ( reliableHiddenOffsetsVal ) {
                contents[ 0 ].style.display = "";
                contents[ 1 ].style.display = "none";
                reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
            }

            body.removeChild( container );
        }

    })();


// A method for quickly swapping in/out CSS properties to get correct calculations.
    jQuery.swap = function( elem, options, callback, args ) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }

        ret = callback.apply( elem, args || [] );

        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }

        return ret;
    };


    var
        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/,

    // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
        rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( style, name ) {

        // shortcut for names that are not vendor prefixed
        if ( name in style ) {
            return name;
        }

        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;

        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in style ) {
                return name;
            }
        }

        return origName;
    }

    function showHide( elements, show ) {
        var display, elem, hidden,
            values = [],
            index = 0,
            length = elements.length;

        for ( ; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }

            values[ index ] = jQuery._data( elem, "olddisplay" );
            display = elem.style.display;
            if ( show ) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if ( !values[ index ] && display === "none" ) {
                    elem.style.display = "";
                }

                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if ( elem.style.display === "" && isHidden( elem ) ) {
                    values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
                }
            } else {
                hidden = isHidden( elem );

                if ( display && display !== "none" || !hidden ) {
                    jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
                }
            }
        }

        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for ( index = 0; index < length; index++ ) {
            elem = elements[ index ];
            if ( !elem.style ) {
                continue;
            }
            if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
                elem.style.display = show ? values[ index ] || "" : "none";
            }
        }

        return elements;
    }

    function setPositiveNumber( elem, value, subtract ) {
        var matches = rnumsplit.exec( value );
        return matches ?
            // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
            value;
    }

    function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
        var i = extra === ( isBorderBox ? "border" : "content" ) ?
                // If we already have the right measurement, avoid augmentation
                4 :
                // Otherwise initialize for horizontal or vertical properties
                name === "width" ? 1 : 0,

            val = 0;

        for ( ; i < 4; i += 2 ) {
            // both box models exclude margin, so add it if we want it
            if ( extra === "margin" ) {
                val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
            }

            if ( isBorderBox ) {
                // border-box includes padding, so remove it if we want content
                if ( extra === "content" ) {
                    val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
                }

                // at this point, extra isn't border nor margin, so remove border
                if ( extra !== "margin" ) {
                    val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            } else {
                // at this point, extra isn't content, so add padding
                val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

                // at this point, extra isn't content nor padding, so add border
                if ( extra !== "padding" ) {
                    val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
                }
            }
        }

        return val;
    }

    function getWidthOrHeight( elem, name, extra ) {

        // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles( elem ),
            isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if ( val <= 0 || val == null ) {
            // Fall back to computed then uncomputed css if necessary
            val = curCSS( elem, name, styles );
            if ( val < 0 || val == null ) {
                val = elem.style[ name ];
            }

            // Computed unit is not pixels. Stop here and return.
            if ( rnumnonpx.test(val) ) {
                return val;
            }

            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

            // Normalize "", auto, and prepare for extra
            val = parseFloat( val ) || 0;
        }

        // use the active box-sizing model to add/subtract irrelevant styles
        return ( val +
        augmentWidthOrHeight(
            elem,
            name,
            extra || ( isBorderBox ? "border" : "content" ),
            valueIsBorderBox,
            styles
        )
        ) + "px";
    }

    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function( elem, computed ) {
                    if ( computed ) {
                        // We should always get a number back from opacity
                        var ret = curCSS( elem, "opacity" );
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            // normalize float css property
            "float": support.cssFloat ? "cssFloat" : "styleFloat"
        },

        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {
            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase( name ),
                style = elem.style;

            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;

                // convert relative number strings (+= or -=) to relative numbers. #7345
                if ( type === "string" && (ret = rrelNum.exec( value )) ) {
                    value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set. See: #7116
                if ( value == null || value !== value ) {
                    return;
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
                    value += "px";
                }

                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
                    style[ name ] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

                    // Support: IE
                    // Swallow errors from 'invalid' CSS values (#5509)
                    try {
                        style[ name ] = value;
                    } catch(e) {}
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },

        css: function( elem, name, extra, styles ) {
            var num, val, hooks,
                origName = jQuery.camelCase( name );

            // Make sure that we're working with the right name
            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

            // gets hook for the prefixed version
            // followed by the unprefixed version
            hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

            // If a hook was provided get the computed value from there
            if ( hooks && "get" in hooks ) {
                val = hooks.get( elem, true, extra );
            }

            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name, styles );
            }

            //convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }

            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if ( extra === "" || extra ) {
                num = parseFloat( val );
                return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
            }
            return val;
        }
    });

    jQuery.each([ "height", "width" ], function( i, name ) {
        jQuery.cssHooks[ name ] = {
            get: function( elem, computed, extra ) {
                if ( computed ) {
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
                        jQuery.swap( elem, cssShow, function() {
                            return getWidthOrHeight( elem, name, extra );
                        }) :
                        getWidthOrHeight( elem, name, extra );
                }
            },

            set: function( elem, value, extra ) {
                var styles = extra && getStyles( elem );
                return setPositiveNumber( elem, value, extra ?
                        augmentWidthOrHeight(
                            elem,
                            name,
                            extra,
                            support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
                            styles
                        ) : 0
                );
            }
        };
    });

    if ( !support.opacity ) {
        jQuery.cssHooks.opacity = {
            get: function( elem, computed ) {
                // IE uses filters for opacity
                return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
                ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
                    computed ? "1" : "";
            },

            set: function( elem, value ) {
                var style = elem.style,
                    currentStyle = elem.currentStyle,
                    opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
                    filter = currentStyle && currentStyle.filter || style.filter || "";

                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                style.zoom = 1;

                // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                if ( ( value >= 1 || value === "" ) &&
                    jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
                    style.removeAttribute ) {

                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    style.removeAttribute( "filter" );

                    // if there is no filter style applied in a css rule or unset inline opacity, we are done
                    if ( value === "" || currentStyle && !currentStyle.filter ) {
                        return;
                    }
                }

                // otherwise, set new filter values
                style.filter = ralpha.test( filter ) ?
                    filter.replace( ralpha, opacity ) :
                filter + " " + opacity;
            }
        };
    }

    jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
        function( elem, computed ) {
            if ( computed ) {
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                // Work around by temporarily setting element display to inline-block
                return jQuery.swap( elem, { "display": "inline-block" },
                    curCSS, [ elem, "marginRight" ] );
            }
        }
    );

// These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function( prefix, suffix ) {
        jQuery.cssHooks[ prefix + suffix ] = {
            expand: function( value ) {
                var i = 0,
                    expanded = {},

                // assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [ value ];

                for ( ; i < 4; i++ ) {
                    expanded[ prefix + cssExpand[ i ] + suffix ] =
                        parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
                }

                return expanded;
            }
        };

        if ( !rmargin.test( prefix ) ) {
            jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function( name, value ) {
            return access( this, function( elem, name, value ) {
                var styles, len,
                    map = {},
                    i = 0;

                if ( jQuery.isArray( name ) ) {
                    styles = getStyles( elem );
                    len = name.length;

                    for ( ; i < len; i++ ) {
                        map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style( elem, name, value ) :
                    jQuery.css( elem, name );
            }, name, value, arguments.length > 1 );
        },
        show: function() {
            return showHide( this, true );
        },
        hide: function() {
            return showHide( this );
        },
        toggle: function( state ) {
            if ( typeof state === "boolean" ) {
                return state ? this.show() : this.hide();
            }

            return this.each(function() {
                if ( isHidden( this ) ) {
                    jQuery( this ).show();
                } else {
                    jQuery( this ).hide();
                }
            });
        }
    });


    function Tween( elem, options, prop, end, easing ) {
        return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function( elem, options, prop, end, easing, unit ) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
        },
        cur: function() {
            var hooks = Tween.propHooks[ this.prop ];

            return hooks && hooks.get ?
                hooks.get( this ) :
                Tween.propHooks._default.get( this );
        },
        run: function( percent ) {
            var eased,
                hooks = Tween.propHooks[ this.prop ];

            if ( this.options.duration ) {
                this.pos = eased = jQuery.easing[ this.easing ](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = ( this.end - this.start ) * eased + this.start;

            if ( this.options.step ) {
                this.options.step.call( this.elem, this.now, this );
            }

            if ( hooks && hooks.set ) {
                hooks.set( this );
            } else {
                Tween.propHooks._default.set( this );
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function( tween ) {
                var result;

                if ( tween.elem[ tween.prop ] != null &&
                    (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
                    return tween.elem[ tween.prop ];
                }

                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                result = jQuery.css( tween.elem, tween.prop, "" );
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function( tween ) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                if ( jQuery.fx.step[ tween.prop ] ) {
                    jQuery.fx.step[ tween.prop ]( tween );
                } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
                    jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
                } else {
                    tween.elem[ tween.prop ] = tween.now;
                }
            }
        }
    };

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function( tween ) {
            if ( tween.elem.nodeType && tween.elem.parentNode ) {
                tween.elem[ tween.prop ] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function( p ) {
            return p;
        },
        swing: function( p ) {
            return 0.5 - Math.cos( p * Math.PI ) / 2;
        }
    };

    jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
    jQuery.fx.step = {};




    var
        fxNow, timerId,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
        rrun = /queueHooks$/,
        animationPrefilters = [ defaultPrefilter ],
        tweeners = {
            "*": [ function( prop, value ) {
                var tween = this.createTween( prop, value ),
                    target = tween.cur(),
                    parts = rfxnum.exec( value ),
                    unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

                // Starting value computation is required for potential unit mismatches
                    start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
                        rfxnum.exec( jQuery.css( tween.elem, prop ) ),
                    scale = 1,
                    maxIterations = 20;

                if ( start && start[ 3 ] !== unit ) {
                    // Trust units reported by jQuery.css
                    unit = unit || start[ 3 ];

                    // Make sure we update the tween properties later on
                    parts = parts || [];

                    // Iteratively approximate from a nonzero starting point
                    start = +target || 1;

                    do {
                        // If previous iteration zeroed out, double until we get *something*
                        // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                        scale = scale || ".5";

                        // Adjust and apply
                        start = start / scale;
                        jQuery.style( tween.elem, prop, start + unit );

                        // Update scale, tolerating zero or NaN from tween.cur()
                        // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
                    } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
                }

                // Update tween properties
                if ( parts ) {
                    start = tween.start = +start || +target || 0;
                    tween.unit = unit;
                    // If a +=/-= token was provided, we're doing a relative animation
                    tween.end = parts[ 1 ] ?
                    start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
                        +parts[ 2 ];
                }

                return tween;
            } ]
        };

// Animations created synchronously will run synchronously
    function createFxNow() {
        setTimeout(function() {
            fxNow = undefined;
        });
        return ( fxNow = jQuery.now() );
    }

// Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
        var which,
            attrs = { height: type },
            i = 0;

        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for ( ; i < 4 ; i += 2 - includeWidth ) {
            which = cssExpand[ i ];
            attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
        }

        if ( includeWidth ) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween( value, prop, animation ) {
        var tween,
            collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
            index = 0,
            length = collection.length;
        for ( ; index < length; index++ ) {
            if ( (tween = collection[ index ].call( animation, prop, value )) ) {

                // we're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter( elem, props, opts ) {
        /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden( elem ),
            dataShow = jQuery._data( elem, "fxshow" );

        // handle queue: false promises
        if ( !opts.queue ) {
            hooks = jQuery._queueHooks( elem, "fx" );
            if ( hooks.unqueued == null ) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if ( !hooks.unqueued ) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function() {
                // doing this makes sure that the complete handler will be called
                // before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if ( !jQuery.queue( elem, "fx" ).length ) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // height/width overflow pass
        if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            display = jQuery.css( elem, "display" );

            // Test default display if display is currently "none"
            checkDisplay = display === "none" ?
            jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

            if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
                    style.display = "inline-block";
                } else {
                    style.zoom = 1;
                }
            }
        }

        if ( opts.overflow ) {
            style.overflow = "hidden";
            if ( !support.shrinkWrapBlocks() ) {
                anim.always(function() {
                    style.overflow = opts.overflow[ 0 ];
                    style.overflowX = opts.overflow[ 1 ];
                    style.overflowY = opts.overflow[ 2 ];
                });
            }
        }

        // show/hide pass
        for ( prop in props ) {
            value = props[ prop ];
            if ( rfxtypes.exec( value ) ) {
                delete props[ prop ];
                toggle = toggle || value === "toggle";
                if ( value === ( hidden ? "hide" : "show" ) ) {

                    // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
                    if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

                // Any non-fx value stops us from restoring the original display value
            } else {
                display = undefined;
            }
        }

        if ( !jQuery.isEmptyObject( orig ) ) {
            if ( dataShow ) {
                if ( "hidden" in dataShow ) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = jQuery._data( elem, "fxshow", {} );
            }

            // store state if its toggle - enables .stop().toggle() to "reverse"
            if ( toggle ) {
                dataShow.hidden = !hidden;
            }
            if ( hidden ) {
                jQuery( elem ).show();
            } else {
                anim.done(function() {
                    jQuery( elem ).hide();
                });
            }
            anim.done(function() {
                var prop;
                jQuery._removeData( elem, "fxshow" );
                for ( prop in orig ) {
                    jQuery.style( elem, prop, orig[ prop ] );
                }
            });
            for ( prop in orig ) {
                tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

                if ( !( prop in dataShow ) ) {
                    dataShow[ prop ] = tween.start;
                    if ( hidden ) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }

            // If this is a noop like .hide().hide(), restore an overwritten display value
        } else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
            style.display = display;
        }
    }

    function propFilter( props, specialEasing ) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for ( index in props ) {
            name = jQuery.camelCase( index );
            easing = specialEasing[ name ];
            value = props[ index ];
            if ( jQuery.isArray( value ) ) {
                easing = value[ 1 ];
                value = props[ index ] = value[ 0 ];
            }

            if ( index !== name ) {
                props[ name ] = value;
                delete props[ index ];
            }

            hooks = jQuery.cssHooks[ name ];
            if ( hooks && "expand" in hooks ) {
                value = hooks.expand( value );
                delete props[ name ];

                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                for ( index in value ) {
                    if ( !( index in props ) ) {
                        props[ index ] = value[ index ];
                        specialEasing[ index ] = easing;
                    }
                }
            } else {
                specialEasing[ name ] = easing;
            }
        }
    }

    function Animation( elem, properties, options ) {
        var result,
            stopped,
            index = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always( function() {
                // don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function() {
                if ( stopped ) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
                // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for ( ; index < length ; index++ ) {
                    animation.tweens[ index ].run( percent );
                }

                deferred.notifyWith( elem, [ animation, percent, remaining ]);

                if ( percent < 1 && length ) {
                    return remaining;
                } else {
                    deferred.resolveWith( elem, [ animation ] );
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend( {}, properties ),
                opts: jQuery.extend( true, { specialEasing: {} }, options ),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function( prop, end ) {
                    var tween = jQuery.Tween( elem, animation.opts, prop, end,
                        animation.opts.specialEasing[ prop ] || animation.opts.easing );
                    animation.tweens.push( tween );
                    return tween;
                },
                stop: function( gotoEnd ) {
                    var index = 0,
                    // if we are going to the end, we want to run all the tweens
                    // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if ( stopped ) {
                        return this;
                    }
                    stopped = true;
                    for ( ; index < length ; index++ ) {
                        animation.tweens[ index ].run( 1 );
                    }

                    // resolve when we played the last frame
                    // otherwise, reject
                    if ( gotoEnd ) {
                        deferred.resolveWith( elem, [ animation, gotoEnd ] );
                    } else {
                        deferred.rejectWith( elem, [ animation, gotoEnd ] );
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter( props, animation.opts.specialEasing );

        for ( ; index < length ; index++ ) {
            result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
            if ( result ) {
                return result;
            }
        }

        jQuery.map( props, createTween, animation );

        if ( jQuery.isFunction( animation.opts.start ) ) {
            animation.opts.start.call( elem, animation );
        }

        jQuery.fx.timer(
            jQuery.extend( tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })
        );

        // attach callbacks from options
        return animation.progress( animation.opts.progress )
            .done( animation.opts.done, animation.opts.complete )
            .fail( animation.opts.fail )
            .always( animation.opts.always );
    }

    jQuery.Animation = jQuery.extend( Animation, {
        tweener: function( props, callback ) {
            if ( jQuery.isFunction( props ) ) {
                callback = props;
                props = [ "*" ];
            } else {
                props = props.split(" ");
            }

            var prop,
                index = 0,
                length = props.length;

            for ( ; index < length ; index++ ) {
                prop = props[ index ];
                tweeners[ prop ] = tweeners[ prop ] || [];
                tweeners[ prop ].unshift( callback );
            }
        },

        prefilter: function( callback, prepend ) {
            if ( prepend ) {
                animationPrefilters.unshift( callback );
            } else {
                animationPrefilters.push( callback );
            }
        }
    });

    jQuery.speed = function( speed, easing, fn ) {
        var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
            complete: fn || !fn && easing ||
            jQuery.isFunction( speed ) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
        };

        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
            opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

        // normalize opt.queue - true/undefined/null -> "fx"
        if ( opt.queue == null || opt.queue === true ) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function() {
            if ( jQuery.isFunction( opt.old ) ) {
                opt.old.call( this );
            }

            if ( opt.queue ) {
                jQuery.dequeue( this, opt.queue );
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function( speed, to, easing, callback ) {

            // show any hidden elements after setting opacity to 0
            return this.filter( isHidden ).css( "opacity", 0 ).show()

                // animate to the value specified
                .end().animate({ opacity: to }, speed, easing, callback );
        },
        animate: function( prop, speed, easing, callback ) {
            var empty = jQuery.isEmptyObject( prop ),
                optall = jQuery.speed( speed, easing, callback ),
                doAnimation = function() {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation( this, jQuery.extend( {}, prop ), optall );

                    // Empty animations, or finishing resolves immediately
                    if ( empty || jQuery._data( this, "finish" ) ) {
                        anim.stop( true );
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each( doAnimation ) :
                this.queue( optall.queue, doAnimation );
        },
        stop: function( type, clearQueue, gotoEnd ) {
            var stopQueue = function( hooks ) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop( gotoEnd );
            };

            if ( typeof type !== "string" ) {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if ( clearQueue && type !== false ) {
                this.queue( type || "fx", [] );
            }

            return this.each(function() {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data( this );

                if ( index ) {
                    if ( data[ index ] && data[ index ].stop ) {
                        stopQueue( data[ index ] );
                    }
                } else {
                    for ( index in data ) {
                        if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
                            stopQueue( data[ index ] );
                        }
                    }
                }

                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
                        timers[ index ].anim.stop( gotoEnd );
                        dequeue = false;
                        timers.splice( index, 1 );
                    }
                }

                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                if ( dequeue || !gotoEnd ) {
                    jQuery.dequeue( this, type );
                }
            });
        },
        finish: function( type ) {
            if ( type !== false ) {
                type = type || "fx";
            }
            return this.each(function() {
                var index,
                    data = jQuery._data( this ),
                    queue = data[ type + "queue" ],
                    hooks = data[ type + "queueHooks" ],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // enable finishing flag on private data
                data.finish = true;

                // empty the queue first
                jQuery.queue( this, type, [] );

                if ( hooks && hooks.stop ) {
                    hooks.stop.call( this, true );
                }

                // look for any active animations, and finish them
                for ( index = timers.length; index--; ) {
                    if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
                        timers[ index ].anim.stop( true );
                        timers.splice( index, 1 );
                    }
                }

                // look for any animations in the old queue and finish them
                for ( index = 0; index < length; index++ ) {
                    if ( queue[ index ] && queue[ index ].finish ) {
                        queue[ index ].finish.call( this );
                    }
                }

                // turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
        var cssFn = jQuery.fn[ name ];
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply( this, arguments ) :
                this.animate( genFx( name, true ), speed, easing, callback );
        };
    });

// Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
        jQuery.fn[ name ] = function( speed, easing, callback ) {
            return this.animate( props, speed, easing, callback );
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer,
            timers = jQuery.timers,
            i = 0;

        fxNow = jQuery.now();

        for ( ; i < timers.length; i++ ) {
            timer = timers[ i ];
            // Checks the timer has not already been removed
            if ( !timer() && timers[ i ] === timer ) {
                timers.splice( i--, 1 );
            }
        }

        if ( !timers.length ) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function( timer ) {
        jQuery.timers.push( timer );
        if ( timer() ) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };

    jQuery.fx.interval = 13;

    jQuery.fx.start = function() {
        if ( !timerId ) {
            timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
        }
    };

    jQuery.fx.stop = function() {
        clearInterval( timerId );
        timerId = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function( time, type ) {
        time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
        type = type || "fx";

        return this.queue( type, function( next, hooks ) {
            var timeout = setTimeout( next, time );
            hooks.stop = function() {
                clearTimeout( timeout );
            };
        });
    };


    (function() {
        // Minified: var a,b,c,d,e
        var input, div, select, a, opt;

        // Setup
        div = document.createElement( "div" );
        div.setAttribute( "className", "t" );
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = div.getElementsByTagName("a")[ 0 ];

        // First batch of tests.
        select = document.createElement("select");
        opt = select.appendChild( document.createElement("option") );
        input = div.getElementsByTagName("input")[ 0 ];

        a.style.cssText = "top:1px";

        // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        support.getSetAttribute = div.className !== "t";

        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        support.style = /top/.test( a.getAttribute("style") );

        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        support.hrefNormalized = a.getAttribute("href") === "/a";

        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        support.checkOn = !!input.value;

        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        support.optSelected = opt.selected;

        // Tests for enctype support on a form (#6743)
        support.enctype = !!document.createElement("form").enctype;

        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Support: IE8 only
        // Check if we can trust getAttribute("value")
        input = document.createElement( "input" );
        input.setAttribute( "value", "" );
        support.input = input.getAttribute( "value" ) === "";

        // Check if an input maintains its value after becoming a radio
        input.value = "t";
        input.setAttribute( "type", "radio" );
        support.radioValue = input.value === "t";
    })();


    var rreturn = /\r/g;

    jQuery.fn.extend({
        val: function( value ) {
            var hooks, ret, isFunction,
                elem = this[0];

            if ( !arguments.length ) {
                if ( elem ) {
                    hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

                    if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?
                        // handle most common string cases
                        ret.replace(rreturn, "") :
                        // handle cases where value is null/undef or number
                        ret == null ? "" : ret;
                }

                return;
            }

            isFunction = jQuery.isFunction( value );

            return this.each(function( i ) {
                var val;

                if ( this.nodeType !== 1 ) {
                    return;
                }

                if ( isFunction ) {
                    val = value.call( this, i, jQuery( this ).val() );
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if ( val == null ) {
                    val = "";
                } else if ( typeof val === "number" ) {
                    val += "";
                } else if ( jQuery.isArray( val ) ) {
                    val = jQuery.map( val, function( value ) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

                // If set returns undefined, fall back to normal setting
                if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function( elem ) {
                    var val = jQuery.find.attr( elem, "value" );
                    return val != null ?
                        val :
                        // Support: IE10-11+
                        // option.text throws exceptions (#14686, #14858)
                        jQuery.trim( jQuery.text( elem ) );
                }
            },
            select: {
                get: function( elem ) {
                    var value, option,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ?
                            max :
                            one ? index : 0;

                    // Loop through all the selected options
                    for ( ; i < max; i++ ) {
                        option = options[ i ];

                        // oldIE doesn't update selected after form reset (#2551)
                        if ( ( option.selected || i === index ) &&
                                // Don't return options that are disabled or in a disabled optgroup
                            ( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
                            ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

                            // Get the specific value for the option
                            value = jQuery( option ).val();

                            // We don't need an array for one selects
                            if ( one ) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push( value );
                        }
                    }

                    return values;
                },

                set: function( elem, value ) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray( value ),
                        i = options.length;

                    while ( i-- ) {
                        option = options[ i ];

                        if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

                            // Support: IE6
                            // When new option element is added to select box we need to
                            // force reflow of newly added node in order to workaround delay
                            // of initialization properties
                            try {
                                option.selected = optionSet = true;

                            } catch ( _ ) {

                                // Will be executed only in IE6
                                option.scrollHeight;
                            }

                        } else {
                            option.selected = false;
                        }
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if ( !optionSet ) {
                        elem.selectedIndex = -1;
                    }

                    return options;
                }
            }
        }
    });

// Radios and checkboxes getter/setter
    jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[ this ] = {
            set: function( elem, value ) {
                if ( jQuery.isArray( value ) ) {
                    return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
                }
            }
        };
        if ( !support.checkOn ) {
            jQuery.valHooks[ this ].get = function( elem ) {
                // Support: Webkit
                // "" is returned instead of "on" if a value isn't specified
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });




    var nodeHook, boolHook,
        attrHandle = jQuery.expr.attrHandle,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = support.getSetAttribute,
        getSetInput = support.input;

    jQuery.fn.extend({
        attr: function( name, value ) {
            return access( this, jQuery.attr, name, value, arguments.length > 1 );
        },

        removeAttr: function( name ) {
            return this.each(function() {
                jQuery.removeAttr( this, name );
            });
        }
    });

    jQuery.extend({
        attr: function( elem, name, value ) {
            var hooks, ret,
                nType = elem.nodeType;

            // don't get/set attributes on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if ( typeof elem.getAttribute === strundefined ) {
                return jQuery.prop( elem, name, value );
            }

            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[ name ] ||
                ( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
            }

            if ( value !== undefined ) {

                if ( value === null ) {
                    jQuery.removeAttr( elem, name );

                } else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
                    return ret;

                } else {
                    elem.setAttribute( name, value + "" );
                    return value;
                }

            } else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
                return ret;

            } else {
                ret = jQuery.find.attr( elem, name );

                // Non-existent attributes return null, we normalize to undefined
                return ret == null ?
                    undefined :
                    ret;
            }
        },

        removeAttr: function( elem, value ) {
            var name, propName,
                i = 0,
                attrNames = value && value.match( rnotwhite );

            if ( attrNames && elem.nodeType === 1 ) {
                while ( (name = attrNames[i++]) ) {
                    propName = jQuery.propFix[ name ] || name;

                    // Boolean attributes get special treatment (#10870)
                    if ( jQuery.expr.match.bool.test( name ) ) {
                        // Set corresponding property to false
                        if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                            elem[ propName ] = false;
                            // Support: IE<9
                            // Also clear defaultChecked/defaultSelected (if appropriate)
                        } else {
                            elem[ jQuery.camelCase( "default-" + name ) ] =
                                elem[ propName ] = false;
                        }

                        // See #9699 for explanation of this approach (setting first, then removal)
                    } else {
                        jQuery.attr( elem, name, "" );
                    }

                    elem.removeAttribute( getSetAttribute ? name : propName );
                }
            }
        },

        attrHooks: {
            type: {
                set: function( elem, value ) {
                    if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to default in case type is set after value during creation
                        var val = elem.value;
                        elem.setAttribute( "type", value );
                        if ( val ) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });

// Hook for boolean attributes
    boolHook = {
        set: function( elem, value, name ) {
            if ( value === false ) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr( elem, name );
            } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
                // IE<8 needs the *property* name
                elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

                // Use defaultChecked and defaultSelected for oldIE
            } else {
                elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
            }

            return name;
        }
    };

// Retrieve booleans specially
    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

        var getter = attrHandle[ name ] || jQuery.find.attr;

        attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
            function( elem, name, isXML ) {
                var ret, handle;
                if ( !isXML ) {
                    // Avoid an infinite loop by temporarily removing this function from the getter
                    handle = attrHandle[ name ];
                    attrHandle[ name ] = ret;
                    ret = getter( elem, name, isXML ) != null ?
                        name.toLowerCase() :
                        null;
                    attrHandle[ name ] = handle;
                }
                return ret;
            } :
            function( elem, name, isXML ) {
                if ( !isXML ) {
                    return elem[ jQuery.camelCase( "default-" + name ) ] ?
                        name.toLowerCase() :
                        null;
                }
            };
    });

// fix oldIE attroperties
    if ( !getSetInput || !getSetAttribute ) {
        jQuery.attrHooks.value = {
            set: function( elem, value, name ) {
                if ( jQuery.nodeName( elem, "input" ) ) {
                    // Does not return so that setAttribute is also used
                    elem.defaultValue = value;
                } else {
                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    return nodeHook && nodeHook.set( elem, value, name );
                }
            }
        };
    }

// IE6/7 do not support getting/setting some attributes with get/setAttribute
    if ( !getSetAttribute ) {

        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        nodeHook = {
            set: function( elem, value, name ) {
                // Set the existing or create a new attribute node
                var ret = elem.getAttributeNode( name );
                if ( !ret ) {
                    elem.setAttributeNode(
                        (ret = elem.ownerDocument.createAttribute( name ))
                    );
                }

                ret.value = value += "";

                // Break association with cloned elements by also using setAttribute (#9646)
                if ( name === "value" || value === elem.getAttribute( name ) ) {
                    return value;
                }
            }
        };

        // Some attributes are constructed with empty-string values when not defined
        attrHandle.id = attrHandle.name = attrHandle.coords =
            function( elem, name, isXML ) {
                var ret;
                if ( !isXML ) {
                    return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
                        ret.value :
                        null;
                }
            };

        // Fixing value retrieval on a button requires this module
        jQuery.valHooks.button = {
            get: function( elem, name ) {
                var ret = elem.getAttributeNode( name );
                if ( ret && ret.specified ) {
                    return ret.value;
                }
            },
            set: nodeHook.set
        };

        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        jQuery.attrHooks.contenteditable = {
            set: function( elem, value, name ) {
                nodeHook.set( elem, value === "" ? false : value, name );
            }
        };

        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        jQuery.each([ "width", "height" ], function( i, name ) {
            jQuery.attrHooks[ name ] = {
                set: function( elem, value ) {
                    if ( value === "" ) {
                        elem.setAttribute( name, "auto" );
                        return value;
                    }
                }
            };
        });
    }

    if ( !support.style ) {
        jQuery.attrHooks.style = {
            get: function( elem ) {
                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case senstitivity in URL's, like in "background"
                return elem.style.cssText || undefined;
            },
            set: function( elem, value ) {
                return ( elem.style.cssText = value + "" );
            }
        };
    }




    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend({
        prop: function( name, value ) {
            return access( this, jQuery.prop, name, value, arguments.length > 1 );
        },

        removeProp: function( name ) {
            name = jQuery.propFix[ name ] || name;
            return this.each(function() {
                // try/catch handles cases where IE balks (such as removing a property on window)
                try {
                    this[ name ] = undefined;
                    delete this[ name ];
                } catch( e ) {}
            });
        }
    });

    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },

        prop: function( elem, name, value ) {
            var ret, hooks, notxml,
                nType = elem.nodeType;

            // don't get/set properties on text, comment and attribute nodes
            if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
                return;
            }

            notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

            if ( notxml ) {
                // Fix name and attach hooks
                name = jQuery.propFix[ name ] || name;
                hooks = jQuery.propHooks[ name ];
            }

            if ( value !== undefined ) {
                return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
                    ret :
                    ( elem[ name ] = value );

            } else {
                return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
                    ret :
                    elem[ name ];
            }
        },

        propHooks: {
            tabIndex: {
                get: function( elem ) {
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr( elem, "tabindex" );

                    return tabindex ?
                        parseInt( tabindex, 10 ) :
                        rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
                            0 :
                            -1;
                }
            }
        }
    });

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if ( !support.hrefNormalized ) {
        // href/src property should get the full normalized URL (#10299/#12915)
        jQuery.each([ "href", "src" ], function( i, name ) {
            jQuery.propHooks[ name ] = {
                get: function( elem ) {
                    return elem.getAttribute( name, 4 );
                }
            };
        });
    }

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
    if ( !support.optSelected ) {
        jQuery.propHooks.selected = {
            get: function( elem ) {
                var parent = elem.parentNode;

                if ( parent ) {
                    parent.selectedIndex;

                    // Make sure that it also works with optgroups, see #5701
                    if ( parent.parentNode ) {
                        parent.parentNode.selectedIndex;
                    }
                }
                return null;
            }
        };
    }

    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[ this.toLowerCase() ] = this;
    });

// IE6/7 call enctype encoding
    if ( !support.enctype ) {
        jQuery.propFix.enctype = "encoding";
    }




    var rclass = /[\t\r\n\f]/g;

    jQuery.fn.extend({
        addClass: function( value ) {
            var classes, elem, cur, clazz, j, finalValue,
                i = 0,
                len = this.length,
                proceed = typeof value === "string" && value;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).addClass( value.call( this, j, this.className ) );
                });
            }

            if ( proceed ) {
                // The disjunction here is for better compressibility (see removeClass)
                classes = ( value || "" ).match( rnotwhite ) || [];

                for ( ; i < len; i++ ) {
                    elem = this[ i ];
                    cur = elem.nodeType === 1 && ( elem.className ?
                        ( " " + elem.className + " " ).replace( rclass, " " ) :
                        " "
                    );

                    if ( cur ) {
                        j = 0;
                        while ( (clazz = classes[j++]) ) {
                            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
                                cur += clazz + " ";
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim( cur );
                        if ( elem.className !== finalValue ) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function( value ) {
            var classes, elem, cur, clazz, j, finalValue,
                i = 0,
                len = this.length,
                proceed = arguments.length === 0 || typeof value === "string" && value;

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( j ) {
                    jQuery( this ).removeClass( value.call( this, j, this.className ) );
                });
            }
            if ( proceed ) {
                classes = ( value || "" ).match( rnotwhite ) || [];

                for ( ; i < len; i++ ) {
                    elem = this[ i ];
                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && ( elem.className ?
                        ( " " + elem.className + " " ).replace( rclass, " " ) :
                        ""
                    );

                    if ( cur ) {
                        j = 0;
                        while ( (clazz = classes[j++]) ) {
                            // Remove *all* instances
                            while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
                                cur = cur.replace( " " + clazz + " ", " " );
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = value ? jQuery.trim( cur ) : "";
                        if ( elem.className !== finalValue ) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function( value, stateVal ) {
            var type = typeof value;

            if ( typeof stateVal === "boolean" && type === "string" ) {
                return stateVal ? this.addClass( value ) : this.removeClass( value );
            }

            if ( jQuery.isFunction( value ) ) {
                return this.each(function( i ) {
                    jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
                });
            }

            return this.each(function() {
                if ( type === "string" ) {
                    // toggle individual class names
                    var className,
                        i = 0,
                        self = jQuery( this ),
                        classNames = value.match( rnotwhite ) || [];

                    while ( (className = classNames[ i++ ]) ) {
                        // check each className given, space separated list
                        if ( self.hasClass( className ) ) {
                            self.removeClass( className );
                        } else {
                            self.addClass( className );
                        }
                    }

                    // Toggle whole class name
                } else if ( type === strundefined || type === "boolean" ) {
                    if ( this.className ) {
                        // store className if set
                        jQuery._data( this, "__className__", this.className );
                    }

                    // If the element has a class name or if we're passed "false",
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
                }
            });
        },

        hasClass: function( selector ) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length;
            for ( ; i < l; i++ ) {
                if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
                    return true;
                }
            }

            return false;
        }
    });




// Return jQuery for attributes-only inclusion


    jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

        // Handle event binding
        jQuery.fn[ name ] = function( data, fn ) {
            return arguments.length > 0 ?
                this.on( name, null, data, fn ) :
                this.trigger( name );
        };
    });

    jQuery.fn.extend({
        hover: function( fnOver, fnOut ) {
            return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
        },

        bind: function( types, data, fn ) {
            return this.on( types, null, data, fn );
        },
        unbind: function( types, fn ) {
            return this.off( types, null, fn );
        },

        delegate: function( selector, types, data, fn ) {
            return this.on( types, selector, data, fn );
        },
        undelegate: function( selector, types, fn ) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
        }
    });


    var nonce = jQuery.now();

    var rquery = (/\?/);



    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

    jQuery.parseJSON = function( data ) {
        // Attempt to parse using the native JSON parser first
        if ( window.JSON && window.JSON.parse ) {
            // Support: Android 2.3
            // Workaround failure to string-cast null input
            return window.JSON.parse( data + "" );
        }

        var requireNonComma,
            depth = null,
            str = jQuery.trim( data + "" );

        // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
        // after removing valid tokens
        return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

            // Force termination if we see a misplaced comma
            if ( requireNonComma && comma ) {
                depth = 0;
            }

            // Perform no more replacements after returning to outermost depth
            if ( depth === 0 ) {
                return token;
            }

            // Commas must not follow "[", "{", or ","
            requireNonComma = open || comma;

            // Determine new depth
            // array/object open ("[" or "{"): depth += true - false (increment)
            // array/object close ("]" or "}"): depth += false - true (decrement)
            // other cases ("," or primitive): depth += true - true (numeric cast)
            depth += !close - !open;

            // Remove this token
            return "";
        }) ) ?
            ( Function( "return " + str ) )() :
            jQuery.error( "Invalid JSON: " + data );
    };


// Cross-browser xml parsing
    jQuery.parseXML = function( data ) {
        var xml, tmp;
        if ( !data || typeof data !== "string" ) {
            return null;
        }
        try {
            if ( window.DOMParser ) { // Standard
                tmp = new DOMParser();
                xml = tmp.parseFromString( data, "text/xml" );
            } else { // IE
                xml = new ActiveXObject( "Microsoft.XMLDOM" );
                xml.async = "false";
                xml.loadXML( data );
            }
        } catch( e ) {
            xml = undefined;
        }
        if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
            jQuery.error( "Invalid XML: " + data );
        }
        return xml;
    };


    var
    // Document location
        ajaxLocParts,
        ajaxLocation,

        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
        prefilters = {},

    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
        transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
    try {
        ajaxLocation = location.href;
    } catch( e ) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        ajaxLocation = document.createElement( "a" );
        ajaxLocation.href = "";
        ajaxLocation = ajaxLocation.href;
    }

// Segment location into parts
    ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {

        // dataTypeExpression is optional and defaults to "*"
        return function( dataTypeExpression, func ) {

            if ( typeof dataTypeExpression !== "string" ) {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

            if ( jQuery.isFunction( func ) ) {
                // For each dataType in the dataTypeExpression
                while ( (dataType = dataTypes[i++]) ) {
                    // Prepend if requested
                    if ( dataType.charAt( 0 ) === "+" ) {
                        dataType = dataType.slice( 1 ) || "*";
                        (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

                        // Otherwise append
                    } else {
                        (structure[ dataType ] = structure[ dataType ] || []).push( func );
                    }
                }
            }
        };
    }

// Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

        var inspected = {},
            seekingTransport = ( structure === transports );

        function inspect( dataType ) {
            var selected;
            inspected[ dataType ] = true;
            jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
                var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
                if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
                    options.dataTypes.unshift( dataTypeOrTransport );
                    inspect( dataTypeOrTransport );
                    return false;
                } else if ( seekingTransport ) {
                    return !( selected = dataTypeOrTransport );
                }
            });
            return selected;
        }

        return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
    function ajaxExtend( target, src ) {
        var deep, key,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for ( key in src ) {
            if ( src[ key ] !== undefined ) {
                ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
            }
        }
        if ( deep ) {
            jQuery.extend( true, target, deep );
        }

        return target;
    }

    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses( s, jqXHR, responses ) {
        var firstDataType, ct, finalDataType, type,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while ( dataTypes[ 0 ] === "*" ) {
            dataTypes.shift();
            if ( ct === undefined ) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if ( ct ) {
            for ( type in contents ) {
                if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    dataTypes.unshift( type );
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if ( dataTypes[ 0 ] in responses ) {
            finalDataType = dataTypes[ 0 ];
        } else {
            // Try convertible dataTypes
            for ( type in responses ) {
                if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
                    finalDataType = type;
                    break;
                }
                if ( !firstDataType ) {
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if ( finalDataType ) {
            if ( finalDataType !== dataTypes[ 0 ] ) {
                dataTypes.unshift( finalDataType );
            }
            return responses[ finalDataType ];
        }
    }

    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert( s, response, jqXHR, isSuccess ) {
        var conv2, current, conv, tmp, prev,
            converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if ( dataTypes[ 1 ] ) {
            for ( conv in s.converters ) {
                converters[ conv.toLowerCase() ] = s.converters[ conv ];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while ( current ) {

            if ( s.responseFields[ current ] ) {
                jqXHR[ s.responseFields[ current ] ] = response;
            }

            // Apply the dataFilter if provided
            if ( !prev && isSuccess && s.dataFilter ) {
                response = s.dataFilter( response, s.dataType );
            }

            prev = current;
            current = dataTypes.shift();

            if ( current ) {

                // There's only work to do if current dataType is non-auto
                if ( current === "*" ) {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if ( prev !== "*" && prev !== current ) {

                    // Seek a direct converter
                    conv = converters[ prev + " " + current ] || converters[ "* " + current ];

                    // If none found, seek a pair
                    if ( !conv ) {
                        for ( conv2 in converters ) {

                            // If conv2 outputs current
                            tmp = conv2.split( " " );
                            if ( tmp[ 1 ] === current ) {

                                // If prev can be converted to accepted input
                                conv = converters[ prev + " " + tmp[ 0 ] ] ||
                                converters[ "* " + tmp[ 0 ] ];
                                if ( conv ) {
                                    // Condense equivalence converters
                                    if ( conv === true ) {
                                        conv = converters[ conv2 ];

                                        // Otherwise, insert the intermediate dataType
                                    } else if ( converters[ conv2 ] !== true ) {
                                        current = tmp[ 0 ];
                                        dataTypes.unshift( tmp[ 1 ] );
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if ( conv !== true ) {

                        // Unless errors are allowed to bubble, catch and return them
                        if ( conv && s[ "throws" ] ) {
                            response = conv( response );
                        } else {
                            try {
                                response = conv( response );
                            } catch ( e ) {
                                return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
                            }
                        }
                    }
                }
            }
        }

        return { state: "success", data: response };
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
             timeout: 0,
             data: null,
             dataType: null,
             username: null,
             password: null,
             cache: null,
             throws: false,
             traditional: false,
             headers: {},
             */

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function( target, settings ) {
            return settings ?

                // Building a settings object
                ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

                // Extending ajaxSettings
                ajaxExtend( jQuery.ajaxSettings, target );
        },

        ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
        ajaxTransport: addToPrefiltersOrTransports( transports ),

        // Main method
        ajax: function( url, options ) {

            // If url is an object, simulate pre-1.5 signature
            if ( typeof url === "object" ) {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var // Cross-domain detection vars
                parts,
            // Loop variable
                i,
            // URL without anti-cache param
                cacheURL,
            // Response headers as string
                responseHeadersString,
            // timeout handle
                timeoutTimer,

            // To know if global events are to be dispatched
                fireGlobals,

                transport,
            // Response headers
                responseHeaders,
            // Create the final options object
                s = jQuery.ajaxSetup( {}, options ),
            // Callbacks context
                callbackContext = s.context || s,
            // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
                    jQuery( callbackContext ) :
                    jQuery.event,
            // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
            // Status-dependent callbacks
                statusCode = s.statusCode || {},
            // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
            // The jqXHR state
                state = 0,
            // Default abort message
                strAbort = "canceled",
            // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function( key ) {
                        var match;
                        if ( state === 2 ) {
                            if ( !responseHeaders ) {
                                responseHeaders = {};
                                while ( (match = rheaders.exec( responseHeadersString )) ) {
                                    responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
                                }
                            }
                            match = responseHeaders[ key.toLowerCase() ];
                        }
                        return match == null ? null : match;
                    },

                    // Raw string
                    getAllResponseHeaders: function() {
                        return state === 2 ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function( name, value ) {
                        var lname = name.toLowerCase();
                        if ( !state ) {
                            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
                            requestHeaders[ name ] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function( type ) {
                        if ( !state ) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function( map ) {
                        var code;
                        if ( map ) {
                            if ( state < 2 ) {
                                for ( code in map ) {
                                    // Lazy-add the new callback in a way that preserves old ones
                                    statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                                }
                            } else {
                                // Execute the appropriate callbacks
                                jqXHR.always( map[ jqXHR.status ] );
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function( statusText ) {
                        var finalText = statusText || strAbort;
                        if ( transport ) {
                            transport.abort( finalText );
                        }
                        done( 0, finalText );
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise( jqXHR ).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if ( s.crossDomain == null ) {
                parts = rurl.exec( s.url.toLowerCase() );
                s.crossDomain = !!( parts &&
                ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
                ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
                ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
                );
            }

            // Convert data if not already a string
            if ( s.data && s.processData && typeof s.data !== "string" ) {
                s.data = jQuery.param( s.data, s.traditional );
            }

            // Apply prefilters
            inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

            // If request was aborted inside a prefilter, stop there
            if ( state === 2 ) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            fireGlobals = s.global;

            // Watch for a new set of requests
            if ( fireGlobals && jQuery.active++ === 0 ) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test( s.type );

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;

            // More options handling for requests with no content
            if ( !s.hasContent ) {

                // If data is available, append data to url
                if ( s.data ) {
                    cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add anti-cache in url if needed
                if ( s.cache === false ) {
                    s.url = rts.test( cacheURL ) ?

                        // If there is already a '_' parameter, set its value
                        cacheURL.replace( rts, "$1_=" + nonce++ ) :

                        // Otherwise add one to the end
                    cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
                }
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if ( s.ifModified ) {
                if ( jQuery.lastModified[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
                }
                if ( jQuery.etag[ cacheURL ] ) {
                    jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
                }
            }

            // Set the correct header, if data is being sent
            if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
                jqXHR.setRequestHeader( "Content-Type", s.contentType );
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
                s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
                    s.accepts[ "*" ]
            );

            // Check for headers option
            for ( i in s.headers ) {
                jqXHR.setRequestHeader( i, s.headers[ i ] );
            }

            // Allow custom headers/mimetypes and early abort
            if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
                // Abort if not done already and return
                return jqXHR.abort();
            }

            // aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for ( i in { success: 1, error: 1, complete: 1 } ) {
                jqXHR[ i ]( s[ i ] );
            }

            // Get transport
            transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

            // If no transport, we auto-abort
            if ( !transport ) {
                done( -1, "No Transport" );
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
                }
                // Timeout
                if ( s.async && s.timeout > 0 ) {
                    timeoutTimer = setTimeout(function() {
                        jqXHR.abort("timeout");
                    }, s.timeout );
                }

                try {
                    state = 1;
                    transport.send( requestHeaders, done );
                } catch ( e ) {
                    // Propagate exception as error if not done
                    if ( state < 2 ) {
                        done( -1, e );
                        // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            }

            // Callback for when everything is done
            function done( status, nativeStatusText, responses, headers ) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Called once
                if ( state === 2 ) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if ( timeoutTimer ) {
                    clearTimeout( timeoutTimer );
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if ( responses ) {
                    response = ajaxHandleResponses( s, jqXHR, responses );
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert( s, response, jqXHR, isSuccess );

                // If successful, handle type chaining
                if ( isSuccess ) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if ( s.ifModified ) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if ( modified ) {
                            jQuery.lastModified[ cacheURL ] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if ( modified ) {
                            jQuery.etag[ cacheURL ] = modified;
                        }
                    }

                    // if no content
                    if ( status === 204 || s.type === "HEAD" ) {
                        statusText = "nocontent";

                        // if not modified
                    } else if ( status === 304 ) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    error = statusText;
                    if ( status || !statusText ) {
                        statusText = "error";
                        if ( status < 0 ) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                // Success/Error
                if ( isSuccess ) {
                    deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
                } else {
                    deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
                }

                // Status-dependent callbacks
                jqXHR.statusCode( statusCode );
                statusCode = undefined;

                if ( fireGlobals ) {
                    globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
                        [ jqXHR, s, isSuccess ? success : error ] );
                }

                // Complete
                completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

                if ( fireGlobals ) {
                    globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
                    // Handle the global AJAX counter
                    if ( !( --jQuery.active ) ) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function( url, data, callback ) {
            return jQuery.get( url, data, callback, "json" );
        },

        getScript: function( url, callback ) {
            return jQuery.get( url, undefined, callback, "script" );
        }
    });

    jQuery.each( [ "get", "post" ], function( i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {
            // shift arguments if data argument was omitted
            if ( jQuery.isFunction( data ) ) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });

// Attach a bunch of functions for handling common AJAX events
    jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
        jQuery.fn[ type ] = function( fn ) {
            return this.on( type, fn );
        };
    });


    jQuery._evalUrl = function( url ) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };


    jQuery.fn.extend({
        wrapAll: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapAll( html.call(this, i) );
                });
            }

            if ( this[0] ) {
                // The elements to wrap the target around
                var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

                if ( this[0].parentNode ) {
                    wrap.insertBefore( this[0] );
                }

                wrap.map(function() {
                    var elem = this;

                    while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
                        elem = elem.firstChild;
                    }

                    return elem;
                }).append( this );
            }

            return this;
        },

        wrapInner: function( html ) {
            if ( jQuery.isFunction( html ) ) {
                return this.each(function(i) {
                    jQuery(this).wrapInner( html.call(this, i) );
                });
            }

            return this.each(function() {
                var self = jQuery( this ),
                    contents = self.contents();

                if ( contents.length ) {
                    contents.wrapAll( html );

                } else {
                    self.append( html );
                }
            });
        },

        wrap: function( html ) {
            var isFunction = jQuery.isFunction( html );

            return this.each(function(i) {
                jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
            });
        },

        unwrap: function() {
            return this.parent().each(function() {
                if ( !jQuery.nodeName( this, "body" ) ) {
                    jQuery( this ).replaceWith( this.childNodes );
                }
            }).end();
        }
    });


    jQuery.expr.filters.hidden = function( elem ) {
        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
        (!support.reliableHiddenOffsets() &&
        ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
    };

    jQuery.expr.filters.visible = function( elem ) {
        return !jQuery.expr.filters.hidden( elem );
    };




    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams( prefix, obj, traditional, add ) {
        var name;

        if ( jQuery.isArray( obj ) ) {
            // Serialize array item.
            jQuery.each( obj, function( i, v ) {
                if ( traditional || rbracket.test( prefix ) ) {
                    // Treat each array item as a scalar.
                    add( prefix, v );

                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
                }
            });

        } else if ( !traditional && jQuery.type( obj ) === "object" ) {
            // Serialize object item.
            for ( name in obj ) {
                buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
            }

        } else {
            // Serialize scalar item.
            add( prefix, obj );
        }
    }

// Serialize an array of form elements or a set of
// key/values into a query string
    jQuery.param = function( a, traditional ) {
        var prefix,
            s = [],
            add = function( key, value ) {
                // If value is a function, invoke it and return its value
                value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
                s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
            };

        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if ( traditional === undefined ) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
            // Serialize the form elements
            jQuery.each( a, function() {
                add( this.name, this.value );
            });

        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for ( prefix in a ) {
                buildParams( prefix, a[ prefix ], traditional, add );
            }
        }

        // Return the resulting serialization
        return s.join( "&" ).replace( r20, "+" );
    };

    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param( this.serializeArray() );
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop( this, "elements" );
                return elements ? jQuery.makeArray( elements ) : this;
            })
                .filter(function() {
                    var type = this.type;
                    // Use .is(":disabled") so that fieldset[disabled] works
                    return this.name && !jQuery( this ).is( ":disabled" ) &&
                    rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
                    ( this.checked || !rcheckableType.test( type ) );
                })
                .map(function( i, elem ) {
                    var val = jQuery( this ).val();

                    return val == null ?
                        null :
                        jQuery.isArray( val ) ?
                            jQuery.map( val, function( val ) {
                                return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                            }) :
                        { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
                }).get();
        }
    });


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
    jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
        // Support: IE6+
        function() {

            // XHR cannot access local files, always use ActiveX for that case
            return !this.isLocal &&

                // Support: IE7-8
                // oldIE XHR does not support non-RFC2616 methods (#13240)
                // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
                // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
                // Although this check for six methods instead of eight
                // since IE also does not support "trace" and "connect"
            /^(get|post|head|put|delete|options)$/i.test( this.type ) &&

            createStandardXHR() || createActiveXHR();
        } :
        // For all other browsers, use the standard XMLHttpRequest object
        createStandardXHR;

    var xhrId = 0,
        xhrCallbacks = {},
        xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
    if ( window.ActiveXObject ) {
        jQuery( window ).on( "unload", function() {
            for ( var key in xhrCallbacks ) {
                xhrCallbacks[ key ]( undefined, true );
            }
        });
    }

// Determine support properties
    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
    xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
    if ( xhrSupported ) {

        jQuery.ajaxTransport(function( options ) {
            // Cross domain only allowed if supported through XMLHttpRequest
            if ( !options.crossDomain || support.cors ) {

                var callback;

                return {
                    send: function( headers, complete ) {
                        var i,
                            xhr = options.xhr(),
                            id = ++xhrId;

                        // Open the socket
                        xhr.open( options.type, options.url, options.async, options.username, options.password );

                        // Apply custom fields if provided
                        if ( options.xhrFields ) {
                            for ( i in options.xhrFields ) {
                                xhr[ i ] = options.xhrFields[ i ];
                            }
                        }

                        // Override mime type if needed
                        if ( options.mimeType && xhr.overrideMimeType ) {
                            xhr.overrideMimeType( options.mimeType );
                        }

                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        if ( !options.crossDomain && !headers["X-Requested-With"] ) {
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }

                        // Set headers
                        for ( i in headers ) {
                            // Support: IE<9
                            // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                            // request header to a null-value.
                            //
                            // To keep consistent with other XHR implementations, cast the value
                            // to string and ignore `undefined`.
                            if ( headers[ i ] !== undefined ) {
                                xhr.setRequestHeader( i, headers[ i ] + "" );
                            }
                        }

                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        xhr.send( ( options.hasContent && options.data ) || null );

                        // Listener
                        callback = function( _, isAbort ) {
                            var status, statusText, responses;

                            // Was never called and is aborted or complete
                            if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
                                // Clean up
                                delete xhrCallbacks[ id ];
                                callback = undefined;
                                xhr.onreadystatechange = jQuery.noop;

                                // Abort manually if needed
                                if ( isAbort ) {
                                    if ( xhr.readyState !== 4 ) {
                                        xhr.abort();
                                    }
                                } else {
                                    responses = {};
                                    status = xhr.status;

                                    // Support: IE<10
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    if ( typeof xhr.responseText === "string" ) {
                                        responses.text = xhr.responseText;
                                    }

                                    // Firefox throws an exception when accessing
                                    // statusText for faulty cross-domain requests
                                    try {
                                        statusText = xhr.statusText;
                                    } catch( e ) {
                                        // We normalize with Webkit giving an empty statusText
                                        statusText = "";
                                    }

                                    // Filter status for non standard behaviors

                                    // If the request is local and we have data: assume a success
                                    // (success with no data won't get notified, that's the best we
                                    // can do given current implementations)
                                    if ( !status && options.isLocal && !options.crossDomain ) {
                                        status = responses.text ? 200 : 404;
                                        // IE - #1450: sometimes returns 1223 when it should be 204
                                    } else if ( status === 1223 ) {
                                        status = 204;
                                    }
                                }
                            }

                            // Call complete if needed
                            if ( responses ) {
                                complete( status, statusText, responses, xhr.getAllResponseHeaders() );
                            }
                        };

                        if ( !options.async ) {
                            // if we're in sync mode we fire the callback
                            callback();
                        } else if ( xhr.readyState === 4 ) {
                            // (IE6 & IE7) if it's in cache and has been
                            // retrieved directly we need to fire the callback
                            setTimeout( callback );
                        } else {
                            // Add to the list of active xhr callbacks
                            xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
                        }
                    },

                    abort: function() {
                        if ( callback ) {
                            callback( undefined, true );
                        }
                    }
                };
            }
        });
    }

// Functions to create xhrs
    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest();
        } catch( e ) {}
    }

    function createActiveXHR() {
        try {
            return new window.ActiveXObject( "Microsoft.XMLHTTP" );
        } catch( e ) {}
    }




// Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function( text ) {
                jQuery.globalEval( text );
                return text;
            }
        }
    });

// Handle cache's special case and global
    jQuery.ajaxPrefilter( "script", function( s ) {
        if ( s.cache === undefined ) {
            s.cache = false;
        }
        if ( s.crossDomain ) {
            s.type = "GET";
            s.global = false;
        }
    });

// Bind script tag hack transport
    jQuery.ajaxTransport( "script", function(s) {

        // This transport only deals with cross domain requests
        if ( s.crossDomain ) {

            var script,
                head = document.head || jQuery("head")[0] || document.documentElement;

            return {

                send: function( _, callback ) {

                    script = document.createElement("script");

                    script.async = true;

                    if ( s.scriptCharset ) {
                        script.charset = s.scriptCharset;
                    }

                    script.src = s.url;

                    // Attach handlers for all browsers
                    script.onload = script.onreadystatechange = function( _, isAbort ) {

                        if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

                            // Handle memory leak in IE
                            script.onload = script.onreadystatechange = null;

                            // Remove the script
                            if ( script.parentNode ) {
                                script.parentNode.removeChild( script );
                            }

                            // Dereference the script
                            script = null;

                            // Callback if not abort
                            if ( !isAbort ) {
                                callback( 200, "success" );
                            }
                        }
                    };

                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    head.insertBefore( script, head.firstChild );
                },

                abort: function() {
                    if ( script ) {
                        script.onload( undefined, true );
                    }
                }
            };
        }
    });




    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
            this[ callback ] = true;
            return callback;
        }
    });

// Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
                    "url" :
                typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
                );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if ( jsonProp ) {
                s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
            } else if ( s.jsonp !== false ) {
                s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if ( !responseContainer ) {
                    jQuery.error( callbackName + " was not called" );
                }
                return responseContainer[ 0 ];
            };

            // force json dataType
            s.dataTypes[ 0 ] = "json";

            // Install callback
            overwritten = window[ callbackName ];
            window[ callbackName ] = function() {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // Restore preexisting value
                window[ callbackName ] = overwritten;

                // Save back as free
                if ( s[ callbackName ] ) {
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push( callbackName );
                }

                // Call if it was a function and we have a response
                if ( responseContainer && jQuery.isFunction( overwritten ) ) {
                    overwritten( responseContainer[ 0 ] );
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function( data, context, keepScripts ) {
        if ( !data || typeof data !== "string" ) {
            return null;
        }
        if ( typeof context === "boolean" ) {
            keepScripts = context;
            context = false;
        }
        context = context || document;

        var parsed = rsingleTag.exec( data ),
            scripts = !keepScripts && [];

        // Single tag
        if ( parsed ) {
            return [ context.createElement( parsed[1] ) ];
        }

        parsed = jQuery.buildFragment( [ data ], context, scripts );

        if ( scripts && scripts.length ) {
            jQuery( scripts ).remove();
        }

        return jQuery.merge( [], parsed.childNodes );
    };


// Keep a copy of the old load method
    var _load = jQuery.fn.load;

    /**
     * Load a url into a page
     */
    jQuery.fn.load = function( url, params, callback ) {
        if ( typeof url !== "string" && _load ) {
            return _load.apply( this, arguments );
        }

        var selector, response, type,
            self = this,
            off = url.indexOf(" ");

        if ( off >= 0 ) {
            selector = jQuery.trim( url.slice( off, url.length ) );
            url = url.slice( 0, off );
        }

        // If it's a function
        if ( jQuery.isFunction( params ) ) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if ( params && typeof params === "object" ) {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if ( self.length > 0 ) {
            jQuery.ajax({
                url: url,

                // if "type" variable is undefined, then "GET" method will be used
                type: type,
                dataType: "html",
                data: params
            }).done(function( responseText ) {

                // Save response for use in complete callback
                response = arguments;

                self.html( selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

                    // Otherwise use the full result
                    responseText );

            }).complete( callback && function( jqXHR, status ) {
                self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
            });
        }

        return this;
    };




    jQuery.expr.filters.animated = function( elem ) {
        return jQuery.grep(jQuery.timers, function( fn ) {
            return elem === fn.elem;
        }).length;
    };





    var docElem = window.document.documentElement;

    /**
     * Gets a window from an element
     */
    function getWindow( elem ) {
        return jQuery.isWindow( elem ) ?
            elem :
            elem.nodeType === 9 ?
            elem.defaultView || elem.parentWindow :
                false;
    }

    jQuery.offset = {
        setOffset: function( elem, options, i ) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css( elem, "position" ),
                curElem = jQuery( elem ),
                props = {};

            // set position first, in-case top/left are set even on static elem
            if ( position === "static" ) {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css( elem, "top" );
            curCSSLeft = jQuery.css( elem, "left" );
            calculatePosition = ( position === "absolute" || position === "fixed" ) &&
            jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            if ( calculatePosition ) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat( curCSSTop ) || 0;
                curLeft = parseFloat( curCSSLeft ) || 0;
            }

            if ( jQuery.isFunction( options ) ) {
                options = options.call( elem, i, curOffset );
            }

            if ( options.top != null ) {
                props.top = ( options.top - curOffset.top ) + curTop;
            }
            if ( options.left != null ) {
                props.left = ( options.left - curOffset.left ) + curLeft;
            }

            if ( "using" in options ) {
                options.using.call( elem, props );
            } else {
                curElem.css( props );
            }
        }
    };

    jQuery.fn.extend({
        offset: function( options ) {
            if ( arguments.length ) {
                return options === undefined ?
                    this :
                    this.each(function( i ) {
                        jQuery.offset.setOffset( this, options, i );
                    });
            }

            var docElem, win,
                box = { top: 0, left: 0 },
                elem = this[ 0 ],
                doc = elem && elem.ownerDocument;

            if ( !doc ) {
                return;
            }

            docElem = doc.documentElement;

            // Make sure it's not a disconnected DOM node
            if ( !jQuery.contains( docElem, elem ) ) {
                return box;
            }

            // If we don't have gBCR, just use 0,0 rather than error
            // BlackBerry 5, iOS 3 (original iPhone)
            if ( typeof elem.getBoundingClientRect !== strundefined ) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow( doc );
            return {
                top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
                left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
            };
        },

        position: function() {
            if ( !this[ 0 ] ) {
                return;
            }

            var offsetParent, offset,
                parentOffset = { top: 0, left: 0 },
                elem = this[ 0 ];

            // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
            if ( jQuery.css( elem, "position" ) === "fixed" ) {
                // we assume that getBoundingClientRect is available when computed position is fixed
                offset = elem.getBoundingClientRect();
            } else {
                // Get *real* offsetParent
                offsetParent = this.offsetParent();

                // Get correct offsets
                offset = this.offset();
                if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
                    parentOffset = offsetParent.offset();
                }

                // Add offsetParent borders
                parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
                parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
            }

            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            return {
                top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
                left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
            };
        },

        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent || docElem;

                while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
                    offsetParent = offsetParent.offsetParent;
                }
                return offsetParent || docElem;
            });
        }
    });

// Create scrollLeft and scrollTop methods
    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
        var top = /Y/.test( prop );

        jQuery.fn[ method ] = function( val ) {
            return access( this, function( elem, method, val ) {
                var win = getWindow( elem );

                if ( val === undefined ) {
                    return win ? (prop in win) ? win[ prop ] :
                        win.document.documentElement[ method ] :
                        elem[ method ];
                }

                if ( win ) {
                    win.scrollTo(
                        !top ? val : jQuery( win ).scrollLeft(),
                        top ? val : jQuery( win ).scrollTop()
                    );

                } else {
                    elem[ method ] = val;
                }
            }, method, val, arguments.length, null );
        };
    });

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
    jQuery.each( [ "top", "left" ], function( i, prop ) {
        jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
            function( elem, computed ) {
                if ( computed ) {
                    computed = curCSS( elem, prop );
                    // if curCSS returns percentage, fallback to offset
                    return rnumnonpx.test( computed ) ?
                    jQuery( elem ).position()[ prop ] + "px" :
                        computed;
                }
            }
        );
    });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
        jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
            // margin is only for outerHeight, outerWidth
            jQuery.fn[ funcName ] = function( margin, value ) {
                var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
                    extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

                return access( this, function( elem, type, value ) {
                    var doc;

                    if ( jQuery.isWindow( elem ) ) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement[ "client" + name ];
                    }

                    // Get document width or height
                    if ( elem.nodeType === 9 ) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                        return Math.max(
                            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
                            elem.body[ "offset" + name ], doc[ "offset" + name ],
                            doc[ "client" + name ]
                        );
                    }

                    return value === undefined ?
                        // Get width or height on the element, requesting but not forcing parseFloat
                        jQuery.css( elem, type, extra ) :

                        // Set width or height on the element
                        jQuery.style( elem, type, value, extra );
                }, type, chainable ? margin : undefined, chainable, null );
            };
        });
    });


// The number of elements contained in the matched element set
    jQuery.fn.size = function() {
        return this.length;
    };

    jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if ( typeof define === "function" && define.amd ) {
        define( "jquery", [], function() {
            return jQuery;
        });
    }




    var
    // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function( deep ) {
        if ( window.$ === jQuery ) {
            window.$ = _$;
        }

        if ( deep && window.jQuery === jQuery ) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
    if ( typeof noGlobal === strundefined ) {
        window.jQuery = window.$ = jQuery;
    }




    return jQuery;

}));

/*!
 * jQuery UI Core @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

// $.ui might exist from components with no dependencies, e.g., $.ui.position
    $.ui = $.ui || {};

    $.extend( $.ui, {
        version: "@VERSION",

        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });

// plugins
    $.fn.extend({
        scrollParent: function() {
            var position = this.css( "position" ),
                excludeStaticParent = position === "absolute",
                scrollParent = this.parents().filter( function() {
                    var parent = $( this );
                    if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
                        return false;
                    }
                    return (/(auto|scroll)/).test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
                }).eq( 0 );

            return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
        },

        uniqueId: (function() {
            var uuid = 0;

            return function() {
                return this.each(function() {
                    if ( !this.id ) {
                        this.id = "ui-id-" + ( ++uuid );
                    }
                });
            };
        })(),

        removeUniqueId: function() {
            return this.each(function() {
                if ( /^ui-id-\d+$/.test( this.id ) ) {
                    $( this ).removeAttr( "id" );
                }
            });
        }
    });

// selectors
    function focusable( element, isTabIndexNotNaN ) {
        var map, mapName, img,
            nodeName = element.nodeName.toLowerCase();
        if ( "area" === nodeName ) {
            map = element.parentNode;
            mapName = map.name;
            if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
                return false;
            }
            img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
            return !!img && visible( img );
        }
        return ( /input|select|textarea|button|object/.test( nodeName ) ?
            !element.disabled :
            "a" === nodeName ?
            element.href || isTabIndexNotNaN :
                isTabIndexNotNaN) &&
            // the element and all of its ancestors must be visible
        visible( element );
    }

    function visible( element ) {
        return $.expr.filters.visible( element ) &&
        !$( element ).parents().addBack().filter(function() {
            return $.css( this, "visibility" ) === "hidden";
        }).length;
    }

    $.extend( $.expr[ ":" ], {
        data: $.expr.createPseudo ?
            $.expr.createPseudo(function( dataName ) {
                return function( elem ) {
                    return !!$.data( elem, dataName );
                };
            }) :
            // support: jQuery <1.8
            function( elem, i, match ) {
                return !!$.data( elem, match[ 3 ] );
            },

        focusable: function( element ) {
            return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
        },

        tabbable: function( element ) {
            var tabIndex = $.attr( element, "tabindex" ),
                isTabIndexNaN = isNaN( tabIndex );
            return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
        }
    });

// support: jQuery <1.8
    if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
        $.each( [ "Width", "Height" ], function( i, name ) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
                type = name.toLowerCase(),
                orig = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };

            function reduce( elem, size, border, margin ) {
                $.each( side, function() {
                    size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
                    if ( border ) {
                        size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
                    }
                    if ( margin ) {
                        size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
                    }
                });
                return size;
            }

            $.fn[ "inner" + name ] = function( size ) {
                if ( size === undefined ) {
                    return orig[ "inner" + name ].call( this );
                }

                return this.each(function() {
                    $( this ).css( type, reduce( this, size ) + "px" );
                });
            };

            $.fn[ "outer" + name] = function( size, margin ) {
                if ( typeof size !== "number" ) {
                    return orig[ "outer" + name ].call( this, size );
                }

                return this.each(function() {
                    $( this).css( type, reduce( this, size, true, margin ) + "px" );
                });
            };
        });
    }

// support: jQuery <1.8
    if ( !$.fn.addBack ) {
        $.fn.addBack = function( selector ) {
            return this.add( selector == null ?
                    this.prevObject : this.prevObject.filter( selector )
            );
        };
    }

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
    if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
        $.fn.removeData = (function( removeData ) {
            return function( key ) {
                if ( arguments.length ) {
                    return removeData.call( this, $.camelCase( key ) );
                } else {
                    return removeData.call( this );
                }
            };
        })( $.fn.removeData );
    }

// deprecated
    $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

    $.fn.extend({
        focus: (function( orig ) {
            return function( delay, fn ) {
                return typeof delay === "number" ?
                    this.each(function() {
                        var elem = this;
                        setTimeout(function() {
                            $( elem ).focus();
                            if ( fn ) {
                                fn.call( elem );
                            }
                        }, delay );
                    }) :
                    orig.apply( this, arguments );
            };
        })( $.fn.focus ),

        disableSelection: (function() {
            var eventType = "onselectstart" in document.createElement( "div" ) ?
                "selectstart" :
                "mousedown";

            return function() {
                return this.bind( eventType + ".ui-disableSelection", function( event ) {
                    event.preventDefault();
                });
            };
        })(),

        enableSelection: function() {
            return this.unbind( ".ui-disableSelection" );
        },

        zIndex: function( zIndex ) {
            if ( zIndex !== undefined ) {
                return this.css( "zIndex", zIndex );
            }

            if ( this.length ) {
                var elem = $( this[ 0 ] ), position, value;
                while ( elem.length && elem[ 0 ] !== document ) {
                    // Ignore z-index if position is set to a value where z-index is ignored by the browser
                    // This makes behavior of this function consistent across browsers
                    // WebKit always returns auto if the element is positioned
                    position = elem.css( "position" );
                    if ( position === "absolute" || position === "relative" || position === "fixed" ) {
                        // IE returns 0 when zIndex is not specified
                        // other browsers return a string
                        // we ignore the case of nested elements with an explicit value of 0
                        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                        value = parseInt( elem.css( "zIndex" ), 10 );
                        if ( !isNaN( value ) && value !== 0 ) {
                            return value;
                        }
                    }
                    elem = elem.parent();
                }
            }

            return 0;
        }
    });

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
    $.ui.plugin = {
        add: function( module, option, set ) {
            var i,
                proto = $.ui[ module ].prototype;
            for ( i in set ) {
                proto.plugins[ i ] = proto.plugins[ i ] || [];
                proto.plugins[ i ].push( [ option, set[ i ] ] );
            }
        },
        call: function( instance, name, args, allowDisconnected ) {
            var i,
                set = instance.plugins[ name ];

            if ( !set ) {
                return;
            }

            if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
                return;
            }

            for ( i = 0; i < set.length; i++ ) {
                if ( instance.options[ set[ i ][ 0 ] ] ) {
                    set[ i ][ 1 ].apply( instance.element, args );
                }
            }
        }
    };

}));
/*!
 * jQuery UI Widget @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;

    $.cleanData = (function( orig ) {
        return function( elems ) {
            var events, elem, i;
            for ( i = 0; (elem = elems[i]) != null; i++ ) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data( elem, "events" );
                    if ( events && events.remove ) {
                        $( elem ).triggerHandler( "remove" );
                    }

                    // http://bugs.jquery.com/ticket/8235
                } catch( e ) {}
            }
            orig( elems );
        };
    })( $.cleanData );

    $.widget = function( name, base, prototype ) {
        var fullName, existingConstructor, constructor, basePrototype,
        // proxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
            proxiedPrototype = {},
            namespace = name.split( "." )[ 0 ];

        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.Widget;
        }

        // create selector for plugin
        $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
            return !!$.data( elem, fullName );
        };

        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            // allow instantiation without "new" keyword
            if ( !this._createWidget ) {
                return new constructor( options, element );
            }

            // allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };
        // extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
            // copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend( {}, prototype ),
            // track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();
        // we need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend( {}, basePrototype.options );
        $.each( prototype, function( prop, value ) {
            if ( !$.isFunction( value ) ) {
                proxiedPrototype[ prop ] = value;
                return;
            }
            proxiedPrototype[ prop ] = (function() {
                var _super = function() {
                        return base.prototype[ prop ].apply( this, arguments );
                    },
                    _superApply = function( args ) {
                        return base.prototype[ prop ].apply( this, args );
                    };
                return function() {
                    var __super = this._super,
                        __superApply = this._superApply,
                        returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply( this, arguments );

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend( basePrototype, {
            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if ( existingConstructor ) {
            $.each( existingConstructor._childConstructors, function( i, child ) {
                var childPrototype = child.prototype;

                // redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
            });
            // remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push( constructor );
        }

        $.widget.bridge( name, constructor );

        return constructor;
    };

    $.widget.extend = function( target ) {
        var input = widget_slice.call( arguments, 1 ),
            inputIndex = 0,
            inputLength = input.length,
            key,
            value;
        for ( ; inputIndex < inputLength; inputIndex++ ) {
            for ( key in input[ inputIndex ] ) {
                value = input[ inputIndex ][ key ];
                if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
                    // Clone objects
                    if ( $.isPlainObject( value ) ) {
                        target[ key ] = $.isPlainObject( target[ key ] ) ?
                            $.widget.extend( {}, target[ key ], value ) :
                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend( {}, value );
                        // Copy everything else by reference
                    } else {
                        target[ key ] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function( name, object ) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[ name ] = function( options ) {
            var isMethodCall = typeof options === "string",
                args = widget_slice.call( arguments, 1 ),
                returnValue = this;

            // allow multiple hashes to be passed on init
            options = !isMethodCall && args.length ?
                $.widget.extend.apply( null, [ options ].concat(args) ) :
                options;

            if ( isMethodCall ) {
                this.each(function() {
                    var methodValue,
                        instance = $.data( this, fullName );
                    if ( options === "instance" ) {
                        returnValue = instance;
                        return false;
                    }
                    if ( !instance ) {
                        return $.error( "cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'" );
                    }
                    if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
                        return $.error( "no such method '" + options + "' for " + name + " widget instance" );
                    }
                    methodValue = instance[ options ].apply( instance, args );
                    if ( methodValue !== instance && methodValue !== undefined ) {
                        returnValue = methodValue && methodValue.jquery ?
                            returnValue.pushStack( methodValue.get() ) :
                            methodValue;
                        return false;
                    }
                });
            } else {
                this.each(function() {
                    var instance = $.data( this, fullName );
                    if ( instance ) {
                        instance.option( options || {} );
                        if ( instance._init ) {
                            instance._init();
                        }
                    } else {
                        $.data( this, fullName, new object( options, this ) );
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,

            // callbacks
            create: null
        },
        _createWidget: function( options, element ) {
            element = $( element || this.defaultElement || this )[ 0 ];
            this.element = $( element );
            this.uuid = widget_uuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = $.widget.extend( {},
                this.options,
                this._getCreateOptions(),
                options );

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();

            if ( element !== this ) {
                $.data( element, this.widgetFullName, this );
                this._on( true, this.element, {
                    remove: function( event ) {
                        if ( event.target === element ) {
                            this.destroy();
                        }
                    }
                });
                this.document = $( element.style ?
                    // element within the document
                    element.ownerDocument :
                    // element is window or document
                element.document || element );
                this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
            }

            this._create();
            this._trigger( "create", null, this._getCreateEventData() );
            this._init();
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,

        destroy: function() {
            this._destroy();
            // we can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .unbind( this.eventNamespace )
                .removeData( this.widgetFullName )
                // support: jquery <1.6.3
                // http://bugs.jquery.com/ticket/9413
                .removeData( $.camelCase( this.widgetFullName ) );
            this.widget()
                .unbind( this.eventNamespace )
                .removeAttr( "aria-disabled" )
                .removeClass(
                this.widgetFullName + "-disabled " +
                "ui-state-disabled" );

            // clean up events and states
            this.bindings.unbind( this.eventNamespace );
            this.hoverable.removeClass( "ui-state-hover" );
            this.focusable.removeClass( "ui-state-focus" );
        },
        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function( key, value ) {
            var options = key,
                parts,
                curOption,
                i;

            if ( arguments.length === 0 ) {
                // don't return a reference to the internal hash
                return $.widget.extend( {}, this.options );
            }

            if ( typeof key === "string" ) {
                // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split( "." );
                key = parts.shift();
                if ( parts.length ) {
                    curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
                    for ( i = 0; i < parts.length - 1; i++ ) {
                        curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
                        curOption = curOption[ parts[ i ] ];
                    }
                    key = parts.pop();
                    if ( arguments.length === 1 ) {
                        return curOption[ key ] === undefined ? null : curOption[ key ];
                    }
                    curOption[ key ] = value;
                } else {
                    if ( arguments.length === 1 ) {
                        return this.options[ key ] === undefined ? null : this.options[ key ];
                    }
                    options[ key ] = value;
                }
            }

            this._setOptions( options );

            return this;
        },
        _setOptions: function( options ) {
            var key;

            for ( key in options ) {
                this._setOption( key, options[ key ] );
            }

            return this;
        },
        _setOption: function( key, value ) {
            this.options[ key ] = value;

            if ( key === "disabled" ) {
                this.widget()
                    .toggleClass( this.widgetFullName + "-disabled", !!value );

                // If the widget is becoming disabled, then nothing is interactive
                if ( value ) {
                    this.hoverable.removeClass( "ui-state-hover" );
                    this.focusable.removeClass( "ui-state-focus" );
                }
            }

            return this;
        },

        enable: function() {
            return this._setOptions({ disabled: false });
        },
        disable: function() {
            return this._setOptions({ disabled: true });
        },

        _on: function( suppressDisabledCheck, element, handlers ) {
            var delegateElement,
                instance = this;

            // no suppressDisabledCheck flag, shuffle arguments
            if ( typeof suppressDisabledCheck !== "boolean" ) {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // no element argument, shuffle and use this.element
            if ( !handlers ) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $( element );
                this.bindings = this.bindings.add( element );
            }

            $.each( handlers, function( event, handler ) {
                function handlerProxy() {
                    // allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if ( !suppressDisabledCheck &&
                        ( instance.options.disabled === true ||
                        $( this ).hasClass( "ui-state-disabled" ) ) ) {
                        return;
                    }
                    return ( typeof handler === "string" ? instance[ handler ] : handler )
                        .apply( instance, arguments );
                }

                // copy the guid so direct unbinding works
                if ( typeof handler !== "string" ) {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                if ( selector ) {
                    delegateElement.delegate( selector, eventName, handlerProxy );
                } else {
                    element.bind( eventName, handlerProxy );
                }
            });
        },

        _off: function( element, eventName ) {
            eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
            element.unbind( eventName ).undelegate( eventName );
        },

        _delay: function( handler, delay ) {
            function handlerProxy() {
                return ( typeof handler === "string" ? instance[ handler ] : handler )
                    .apply( instance, arguments );
            }
            var instance = this;
            return setTimeout( handlerProxy, delay || 0 );
        },

        _hoverable: function( element ) {
            this.hoverable = this.hoverable.add( element );
            this._on( element, {
                mouseenter: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-hover" );
                },
                mouseleave: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-hover" );
                }
            });
        },

        _focusable: function( element ) {
            this.focusable = this.focusable.add( element );
            this._on( element, {
                focusin: function( event ) {
                    $( event.currentTarget ).addClass( "ui-state-focus" );
                },
                focusout: function( event ) {
                    $( event.currentTarget ).removeClass( "ui-state-focus" );
                }
            });
        },

        _trigger: function( type, event, data ) {
            var prop, orig,
                callback = this.options[ type ];

            data = data || {};
            event = $.Event( event );
            event.type = ( type === this.widgetEventPrefix ?
                type :
            this.widgetEventPrefix + type ).toLowerCase();
            // the original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[ 0 ];

            // copy original event properties over to the new event
            orig = event.originalEvent;
            if ( orig ) {
                for ( prop in orig ) {
                    if ( !( prop in event ) ) {
                        event[ prop ] = orig[ prop ];
                    }
                }
            }

            this.element.trigger( event, data );
            return !( $.isFunction( callback ) &&
            callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
            event.isDefaultPrevented() );
        }
    };

    $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
        $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
            if ( typeof options === "string" ) {
                options = { effect: options };
            }
            var hasOptions,
                effectName = !options ?
                    method :
                    options === true || typeof options === "number" ?
                        defaultEffect :
                    options.effect || defaultEffect;
            options = options || {};
            if ( typeof options === "number" ) {
                options = { duration: options };
            }
            hasOptions = !$.isEmptyObject( options );
            options.complete = callback;
            if ( options.delay ) {
                element.delay( options.delay );
            }
            if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
                element[ method ]( options );
            } else if ( effectName !== method && element[ effectName ] ) {
                element[ effectName ]( options.duration, options.easing, callback );
            } else {
                element.queue(function( next ) {
                    $( this )[ method ]();
                    if ( callback ) {
                        callback.call( element[ 0 ] );
                    }
                    next();
                });
            }
        };
    });

    return $.widget;

}));

/*!
 * jQuery UI Mouse @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "./widget"
        ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

    var mouseHandled = false;
    $( document ).mouseup( function() {
        mouseHandled = false;
    });

    return $.widget("ui.mouse", {
        version: "@VERSION",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;

            this.element
                .bind("mousedown." + this.widgetName, function(event) {
                    return that._mouseDown(event);
                })
                .bind("click." + this.widgetName, function(event) {
                    if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                        $.removeData(event.target, that.widgetName + ".preventClickEvent");
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if ( this._mouseMoveDelegate ) {
                this.document
                    .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function(event) {
            // don't let more than one widget handle mouseStart
            if ( mouseHandled ) {
                return;
            }

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = (event.which === 1),
            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
                elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };

            this.document
                .bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .bind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function(event) {
            // IE mouseup check - mouseup happened when mouse was out of window
            if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
                return this._mouseUp(event);

                // Iframe mouseup check - mouseup occurred in another document
            } else if ( !event.which ) {
                return this._mouseUp( event );
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function(event) {
            this.document
                .unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
                .unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            mouseHandled = false;
            return false;
        },

        _mouseDistanceMet: function(event) {
            return (Math.max(
                Math.abs(this._mouseDownEvent.pageX - event.pageX),
                Math.abs(this._mouseDownEvent.pageY - event.pageY)
            ) >= this.options.distance
            );
        },

        _mouseDelayMet: function(/* event */) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function(/* event */) {},
        _mouseDrag: function(/* event */) {},
        _mouseStop: function(/* event */) {},
        _mouseCapture: function(/* event */) { return true; }
    });

}));

/*!
 * jQuery UI Position @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "jquery" ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
    (function() {

        $.ui = $.ui || {};

        var cachedScrollbarWidth, supportsOffsetFractions,
            max = Math.max,
            abs = Math.abs,
            round = Math.round,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets( offsets, width, height ) {
            return [
                parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
                parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
            ];
        }

        function parseCss( element, property ) {
            return parseInt( $.css( element, property ), 10 ) || 0;
        }

        function getDimensions( elem ) {
            var raw = elem[0];
            if ( raw.nodeType === 9 ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: 0, left: 0 }
                };
            }
            if ( $.isWindow( raw ) ) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
                };
            }
            if ( raw.preventDefault ) {
                return {
                    width: 0,
                    height: 0,
                    offset: { top: raw.pageY, left: raw.pageX }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }

        $.position = {
            scrollbarWidth: function() {
                if ( cachedScrollbarWidth !== undefined ) {
                    return cachedScrollbarWidth;
                }
                var w1, w2,
                    div = $( "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
                    innerDiv = div.children()[0];

                $( "body" ).append( div );
                w1 = innerDiv.offsetWidth;
                div.css( "overflow", "scroll" );

                w2 = innerDiv.offsetWidth;

                if ( w1 === w2 ) {
                    w2 = div[0].clientWidth;
                }

                div.remove();

                return (cachedScrollbarWidth = w1 - w2);
            },
            getScrollInfo: function( within ) {
                var overflowX = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-x" ),
                    overflowY = within.isWindow || within.isDocument ? "" :
                        within.element.css( "overflow-y" ),
                    hasOverflowX = overflowX === "scroll" ||
                        ( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
                    hasOverflowY = overflowY === "scroll" ||
                        ( overflowY === "auto" && within.height < within.element[0].scrollHeight );
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function( element ) {
                var withinElement = $( element || window ),
                    isWindow = $.isWindow( withinElement[0] ),
                    isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: withinElement.offset() || { left: 0, top: 0 },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),

                    // support: jQuery 1.6.x
                    // jQuery 1.6 doesn't support .outerWidth/Height() on documents or windows
                    width: isWindow || isDocument ? withinElement.width() : withinElement.outerWidth(),
                    height: isWindow || isDocument ? withinElement.height() : withinElement.outerHeight()
                };
            }
        };

        $.fn.position = function( options ) {
            if ( !options || !options.of ) {
                return _position.apply( this, arguments );
            }

            // make a copy, we don't want to modify arguments
            options = $.extend( {}, options );

            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
                target = $( options.of ),
                within = $.position.getWithinInfo( options.within ),
                scrollInfo = $.position.getScrollInfo( within ),
                collision = ( options.collision || "flip" ).split( " " ),
                offsets = {};

            dimensions = getDimensions( target );
            if ( target[0].preventDefault ) {
                // force left top to allow flipping
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            // clone to reuse original targetOffset later
            basePosition = $.extend( {}, targetOffset );

            // force my and at to have valid horizontal and vertical positions
            // if a value is missing or invalid, it will be converted to center
            $.each( [ "my", "at" ], function() {
                var pos = ( options[ this ] || "" ).split( " " ),
                    horizontalOffset,
                    verticalOffset;

                if ( pos.length === 1) {
                    pos = rhorizontal.test( pos[ 0 ] ) ?
                        pos.concat( [ "center" ] ) :
                        rvertical.test( pos[ 0 ] ) ?
                            [ "center" ].concat( pos ) :
                            [ "center", "center" ];
                }
                pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
                pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

                // calculate offsets
                horizontalOffset = roffset.exec( pos[ 0 ] );
                verticalOffset = roffset.exec( pos[ 1 ] );
                offsets[ this ] = [
                    horizontalOffset ? horizontalOffset[ 0 ] : 0,
                    verticalOffset ? verticalOffset[ 0 ] : 0
                ];

                // reduce to just the positions without the offsets
                options[ this ] = [
                    rposition.exec( pos[ 0 ] )[ 0 ],
                    rposition.exec( pos[ 1 ] )[ 0 ]
                ];
            });

            // normalize collision option
            if ( collision.length === 1 ) {
                collision[ 1 ] = collision[ 0 ];
            }

            if ( options.at[ 0 ] === "right" ) {
                basePosition.left += targetWidth;
            } else if ( options.at[ 0 ] === "center" ) {
                basePosition.left += targetWidth / 2;
            }

            if ( options.at[ 1 ] === "bottom" ) {
                basePosition.top += targetHeight;
            } else if ( options.at[ 1 ] === "center" ) {
                basePosition.top += targetHeight / 2;
            }

            atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
            basePosition.left += atOffset[ 0 ];
            basePosition.top += atOffset[ 1 ];

            return this.each(function() {
                var collisionPosition, using,
                    elem = $( this ),
                    elemWidth = elem.outerWidth(),
                    elemHeight = elem.outerHeight(),
                    marginLeft = parseCss( this, "marginLeft" ),
                    marginTop = parseCss( this, "marginTop" ),
                    collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
                    collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
                    position = $.extend( {}, basePosition ),
                    myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

                if ( options.my[ 0 ] === "right" ) {
                    position.left -= elemWidth;
                } else if ( options.my[ 0 ] === "center" ) {
                    position.left -= elemWidth / 2;
                }

                if ( options.my[ 1 ] === "bottom" ) {
                    position.top -= elemHeight;
                } else if ( options.my[ 1 ] === "center" ) {
                    position.top -= elemHeight / 2;
                }

                position.left += myOffset[ 0 ];
                position.top += myOffset[ 1 ];

                // if the browser doesn't support fractions, then round for consistent results
                if ( !supportsOffsetFractions ) {
                    position.left = round( position.left );
                    position.top = round( position.top );
                }

                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };

                $.each( [ "left", "top" ], function( i, dir ) {
                    if ( $.ui.position[ collision[ i ] ] ) {
                        $.ui.position[ collision[ i ] ][ dir ]( position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });

                if ( options.using ) {
                    // adds feedback as second argument to using callback, if present
                    using = function( props ) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                            };
                        if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
                            feedback.horizontal = "center";
                        }
                        if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
                            feedback.vertical = "middle";
                        }
                        if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call( this, props, feedback );
                    };
                }

                elem.offset( $.extend( position, { using: using } ) );
            });
        };

        $.ui.position = {
            fit: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                        outerWidth = within.width,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = withinOffset - collisionPosLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
                        newOverRight;

                    // element is wider than within
                    if ( data.collisionWidth > outerWidth ) {
                        // element is initially over the left side of within
                        if ( overLeft > 0 && overRight <= 0 ) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                            // element is initially over right side of within
                        } else if ( overRight > 0 && overLeft <= 0 ) {
                            position.left = withinOffset;
                            // element is initially over both left and right sides of within
                        } else {
                            if ( overLeft > overRight ) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                        // too far left -> align with left edge
                    } else if ( overLeft > 0 ) {
                        position.left += overLeft;
                        // too far right -> align with right edge
                    } else if ( overRight > 0 ) {
                        position.left -= overRight;
                        // adjust based on position and margin
                    } else {
                        position.left = max( position.left - collisionPosLeft, position.left );
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                        outerHeight = data.within.height,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = withinOffset - collisionPosTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
                        newOverBottom;

                    // element is taller than within
                    if ( data.collisionHeight > outerHeight ) {
                        // element is initially over the top of within
                        if ( overTop > 0 && overBottom <= 0 ) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                            // element is initially over bottom of within
                        } else if ( overBottom > 0 && overTop <= 0 ) {
                            position.top = withinOffset;
                            // element is initially over both top and bottom of within
                        } else {
                            if ( overTop > overBottom ) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                        // too far up -> align with top
                    } else if ( overTop > 0 ) {
                        position.top += overTop;
                        // too far down -> align with bottom edge
                    } else if ( overBottom > 0 ) {
                        position.top -= overBottom;
                        // adjust based on position and margin
                    } else {
                        position.top = max( position.top - collisionPosTop, position.top );
                    }
                }
            },
            flip: {
                left: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.left + within.scrollLeft,
                        outerWidth = within.width,
                        offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                        collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                        overLeft = collisionPosLeft - offsetLeft,
                        overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                        myOffset = data.my[ 0 ] === "left" ?
                            -data.elemWidth :
                            data.my[ 0 ] === "right" ?
                                data.elemWidth :
                                0,
                        atOffset = data.at[ 0 ] === "left" ?
                            data.targetWidth :
                            data.at[ 0 ] === "right" ?
                                -data.targetWidth :
                                0,
                        offset = -2 * data.offset[ 0 ],
                        newOverRight,
                        newOverLeft;

                    if ( overLeft < 0 ) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if ( overRight > 0 ) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function( position, data ) {
                    var within = data.within,
                        withinOffset = within.offset.top + within.scrollTop,
                        outerHeight = within.height,
                        offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                        collisionPosTop = position.top - data.collisionPosition.marginTop,
                        overTop = collisionPosTop - offsetTop,
                        overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                        top = data.my[ 1 ] === "top",
                        myOffset = top ?
                            -data.elemHeight :
                            data.my[ 1 ] === "bottom" ?
                                data.elemHeight :
                                0,
                        atOffset = data.at[ 1 ] === "top" ?
                            data.targetHeight :
                            data.at[ 1 ] === "bottom" ?
                                -data.targetHeight :
                                0,
                        offset = -2 * data.offset[ 1 ],
                        newOverTop,
                        newOverBottom;
                    if ( overTop < 0 ) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if ( overBottom > 0 ) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply( this, arguments );
                    $.ui.position.fit.left.apply( this, arguments );
                },
                top: function() {
                    $.ui.position.flip.top.apply( this, arguments );
                    $.ui.position.fit.top.apply( this, arguments );
                }
            }
        };

// fraction support test
        (function() {
            var testElement, testElementParent, testElementStyle, offsetLeft, i,
                body = document.getElementsByTagName( "body" )[ 0 ],
                div = document.createElement( "div" );

            //Create a "fake body" for testing based on method used in jQuery.support
            testElement = document.createElement( body ? "div" : "body" );
            testElementStyle = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if ( body ) {
                $.extend( testElementStyle, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
            }
            for ( i in testElementStyle ) {
                testElement.style[ i ] = testElementStyle[ i ];
            }
            testElement.appendChild( div );
            testElementParent = body || document.documentElement;
            testElementParent.insertBefore( testElement, testElementParent.firstChild );

            div.style.cssText = "position: absolute; left: 10.7432222px;";

            offsetLeft = $( div ).offset().left;
            supportsOffsetFractions = offsetLeft > 10 && offsetLeft < 11;

            testElement.innerHTML = "";
            testElementParent.removeChild( testElement );
        })();

    })();

    return $.ui.position;

}));

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* Prevent default on # hrefs */

$(function() { "use strict";
  $('a[href="#"]').click(function(event) {
      event.preventDefault();
  });
});

/* To do check toggle */

$(function() { "use strict";
  $(".todo-box li input").on('click', function() {
      $(this).parent().toggleClass('todo-done');
  });
});

/* Horizontal timeline */

$(function() { "use strict";

  var overall_width = 0;

  $('.timeline-scroll .tl-row').each(function(index, elem) {
      var $elem = $(elem);
      overall_width += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10);
  });

  $('.timeline-horizontal', this).width(overall_width);
});

/* Input switch alternate */

$(function() { "use strict";
    $('.input-switch-alt').simpleCheckbox();
});

/* Slim scrollbar */

$(function() { "use strict";
    $('.scrollable-slim').slimScroll({
        color: '#8da0aa',
        size: '10px',
        alwaysVisible: true
    });
});

$(function() { "use strict";
    $('.scrollable-slim-sidebar').slimScroll({
        color: '#8da0aa',
        size: '10px',
        height: '100%',
        alwaysVisible: true
    });
});

$(function() { "use strict";
    $('.scrollable-slim-box').slimScroll({
        color: '#8da0aa',
        size: '6px',
        alwaysVisible: false
    });
});

/* Loading buttons */

$(function() { "use strict";

  $('.loading-button').click(function() {
      var btn = $(this)
      btn.button('loading');
  });

});

/* Tooltips */

$(function() { "use strict";

  $('.tooltip-button').tooltip({
      container: 'body'
  });

});

/* Close response message */

$(function() { "use strict";
  $('.alert-close-btn').click(function() {
      $(this).parent().addClass('animated fadeOutDown');
  });
});

/* Popovers */

$(function() { "use strict";

  $('.popover-button').popover({
      container: 'body',
      html: true,
      animation: true,
      content: function() {
          var dataID = $(this).attr('data-id');
          return $(dataID).html();
      }
  }).click(function(evt) {
      evt.preventDefault();
  });

});

$(function() { "use strict";
  $('.popover-button-default').popover({
      container: 'body',
      html: true,
      animation: true
  }).click(function(evt) {
      evt.preventDefault();
  });
});

/* Color schemes */

var mUIColors = {
    'default':      '#3498db',
    'gray':         '#d6dde2',
    'primary':      '#00bca4',
    'success':      '#2ecc71',
    'warning':      '#e67e22',
    'danger':       '#e74c3c',
    'info':         '#3498db'
};

var getUIColor = function (name) {
    if (mUIColors[name]) {
        return mUIColors[name];
    } else {
        return mUIColors['default'];
    }
}

/* Screenfull */

if(document.getElementById('fullscreen-btn')) {
  document.getElementById('fullscreen-btn').addEventListener('click', function () {
    if (screenfull.enabled) {
        screenfull.request();
    }
  });
}

$(document).ready(function() {

    body_sizer();

    $("div[id='#fixed-sidebar']").on('click', function() {

        if ($(this).hasClass("switch-on")) {
            var windowHeight = $(window).height();
            var headerHeight = $('#page-header').height();
            var contentHeight = windowHeight - headerHeight;

            $('#page-sidebar').css('height', contentHeight);
            $('.scroll-sidebar').css('height', contentHeight);

            $('.scroll-sidebar').slimscroll({
                height: '100%',
                color: 'rgba(155, 164, 169, 0.68)',
                size: '6px'
            });

            var headerBg = $('#page-header').attr('class');
            $('#header-logo').addClass(headerBg);

        } else {
            var windowHeight = $(document).height();
            var headerHeight = $('#page-header').height();
            var contentHeight = windowHeight - headerHeight;

            $('#page-sidebar').css('height', contentHeight);
            $('.scroll-sidebar').css('height', contentHeight);

            $(".scroll-sidebar").slimScroll({
                destroy: true
            });

            $('#header-logo').removeClass('bg-gradient-9');

        }

    });

});

$(window).on('resize', function() {
    body_sizer();
});

function body_sizer() {

    if ($('body').hasClass('fixed-sidebar')) {

        var windowHeight = $(window).height();
        var headerHeight = $('#page-header').height();
        var contentHeight = windowHeight - headerHeight;

        $('#page-sidebar').css('height', contentHeight);
        $('.scroll-sidebar').css('height', contentHeight);
        $('#page-content').css('min-height', contentHeight);

    } else {

        var windowHeight = $(document).height();
        var headerHeight = $('#page-header').height();
        var contentHeight = windowHeight - headerHeight;

        $('#page-sidebar').css('height', contentHeight);
        $('.scroll-sidebar').css('height', contentHeight);
        $('#page-content').css('min-height', contentHeight);

    }

};

function pageTransitions() {

    var transitions = ['.pt-page-moveFromLeft', 'pt-page-moveFromRight', 'pt-page-moveFromTop', 'pt-page-moveFromBottom', 'pt-page-fade', 'pt-page-moveFromLeftFade', 'pt-page-moveFromRightFade', 'pt-page-moveFromTopFade', 'pt-page-moveFromBottomFade', 'pt-page-scaleUp', 'pt-page-scaleUpCenter', 'pt-page-flipInLeft', 'pt-page-flipInRight', 'pt-page-flipInBottom', 'pt-page-flipInTop', 'pt-page-rotatePullRight', 'pt-page-rotatePullLeft', 'pt-page-rotatePullTop', 'pt-page-rotatePullBottom', 'pt-page-rotateUnfoldLeft', 'pt-page-rotateUnfoldRight', 'pt-page-rotateUnfoldTop', 'pt-page-rotateUnfoldBottom'];
    for (var i in transitions) {
        var transition_name = transitions[i];
        if ($('.add-transition').hasClass(transition_name)) {

            $('.add-transition').addClass(transition_name + '-init page-transition');

            setTimeout(function() {
                $('.add-transition').removeClass(transition_name + ' ' + transition_name + '-init page-transition');
            }, 1200);
            return;
        }
    }

};

$(document).ready(function() {

    pageTransitions();

    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    /* Sidebar menu */
    $(function() {

        $('#sidebar-menu').superclick({
            animation: {
                height: 'show'
            },
            animationOut: {
                height: 'hide'
            }
        });

        //automatically open the current path
        var path = window.location.pathname.split('/');
        path = path[path.length-1];
        if (path !== undefined) {
            $("#sidebar-menu").find("a[href$='" + path + "']").addClass('sfActive');
            $("#sidebar-menu").find("a[href$='" + path + "']").parents().eq(3).superclick('show');
        }

    });

    /* Colapse sidebar */
    $(function() {

        $('#close-sidebar').click(function() {
            $('body').toggleClass('closed-sidebar');
            $('.glyph-icon', this).toggleClass('icon-angle-right').toggleClass('icon-angle-left');
        });

    });

    /* Sidebar scroll */



});
/* Admin layout options */

$(document).on('ready', function() {

    $('#theme-switcher-wrapper .switch-toggle').on('click', this, function() {
        var dataToggle = $(this).prev().attr('data-toggletarget');
        $('body').toggleClass(dataToggle);

        if ( dataToggle = 'closed-sidebar' ) {
            $('#close-sidebar .glyph-icon').toggleClass('icon-angle-right').toggleClass('icon-angle-left');
        }
    });

    $('.switch-toggle[id="#boxed-layout"]').click(function(){

        if ( $('#boxed-layout').attr("checked") ) {
            $('.boxed-bg-wrapper').slideDown();
        } else {
            $('.boxed-bg-wrapper').slideUp();
        }

    });
});

/* Open theme switcher */

$(function() {

    $(".theme-switcher").click(function() {
        $("#theme-options").toggleClass('active');
    });

});

/* Admin header style */

$(function() {

    $('.set-adminheader-style').click(function() {
        $('.set-adminheader-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $("#page-header").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $("#page-header").removeClass(function(index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('#page-header').addClass(newBg);
    });

});

/* Admin sidebar style */

$(function() {

    $('.set-sidebar-style').click(function() {
        $('.set-sidebar-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $("#page-sidebar").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $("#page-sidebar").removeClass(function(index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('#page-sidebar').addClass(newBg);
    });

});

/* Boxed layout background style */

$(function() {

    $('.set-background-style').click(function() {
        $('.set-background-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $("body").removeClass(function(index, css) {
            return (css.match(/(^|\s)pattern-\S+/g) || []).join(' ');
        });
        $("body").removeClass(function(index, css) {
            return (css.match(/(^|\s)full-\S+/g) || []).join(' ');
        });
        $("body").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $("body").removeClass(function(index, css) {
            return (css.match(/(^|\s)fixed-\S+/g) || []).join(' ');
        });
        $('body').addClass(newBg);
    });

});

/* Frontend header style */

$(function() {

    $('.set-header-style').click(function() {
        $('.set-header-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $(".main-header").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $(".main-header").removeClass(function(index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('.main-header').addClass(newBg);
    });

});

/* Frontend footer style */

$(function() {

    $('.set-footer-style').click(function() {
        $('.set-footer-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $(".main-footer").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $(".main-footer").removeClass(function(index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('.main-footer').addClass(newBg);
    });

});


/* Frontend top menu style */

$(function() {

    $('.set-topmenu-style').click(function() {
        $('.set-topmenu-style').removeClass('active');
        $(this).addClass('active');
        var newBg = $(this).attr('data-header-bg');
        $(".top-bar").removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $(".top-bar").removeClass(function(index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('.top-bar').addClass(newBg);
    });

});

/* Theme styler scroll */

$(function() {

    $('.scroll-switcher').slimscroll({
        height: '100%',
        color: 'rgba(0,0,0,0.3)',
        size: '10px',
        alwaysVisible: true
    });
    //
    //$(".scroll-switcher").slimScroll({
    //    destroy: true
    //});

});

function swither_resizer() {
    var windowHeight = $(window).height();
    $('#theme-switcher-wrapper').height(windowHeight / 1.4);
}

$(document).on('ready', function() {
    swither_resizer();
});

$(window).on('resize', function() {
    swither_resizer();
});
/*!
 * jQuery UI Accordion @VERSION
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
(function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "./core",
            "./widget"
        ], factory );
    } else {

        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {

    return $.widget( "ui.accordion", {
        version: "@VERSION",
        options: {
            active: 0,
            animate: {},
            collapsible: false,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
                // ARIA
                .attr( "role", "tablist" );

            // don't allow collapsible: false and active: false / null
            if ( !options.collapsible && (options.active === false || options.active == null) ) {
                options.active = 0;
            }

            this._processPanels();
            // handle negative values
            if ( options.active < 0 ) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function() {
            var icons = this.options.icons;
            if ( icons ) {
                $( "<span>" )
                    .addClass( "ui-accordion-header-icon ui-icon " + icons.header )
                    .prependTo( this.headers );
                this.active.children( ".ui-accordion-header-icon" )
                    .removeClass( icons.header )
                    .addClass( icons.activeHeader );
                this.headers.addClass( "ui-accordion-icons" );
            }
        },

        _destroyIcons: function() {
            this.headers
                .removeClass( "ui-accordion-icons" )
                .children( ".ui-accordion-header-icon" )
                .remove();
        },

        _destroy: function() {
            var contents;

            // clean up main element
            this.element
                .removeClass( "ui-accordion ui-widget ui-helper-reset" )
                .removeAttr( "role" );

            // clean up headers
            this.headers
                .removeClass( "ui-accordion-header ui-accordion-header-active ui-state-default " +
                "ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
                .removeAttr( "role" )
                .removeAttr( "aria-expanded" )
                .removeAttr( "aria-selected" )
                .removeAttr( "aria-controls" )
                .removeAttr( "tabIndex" )
                .removeUniqueId();

            this._destroyIcons();

            // clean up content panels
            contents = this.headers.next()
                .removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom " +
                "ui-accordion-content ui-accordion-content-active ui-state-disabled" )
                .css( "display", "" )
                .removeAttr( "role" )
                .removeAttr( "aria-hidden" )
                .removeAttr( "aria-labelledby" )
                .removeUniqueId();

            if ( this.options.heightStyle !== "content" ) {
                contents.css( "height", "" );
            }
        },

        _setOption: function( key, value ) {
            if ( key === "active" ) {
                // _activate() will handle invalid values and update this.options
                this._activate( value );
                return;
            }

            if ( key === "event" ) {
                if ( this.options.event ) {
                    this._off( this.headers, this.options.event );
                }
                this._setupEvents( value );
            }

            this._super( key, value );

            // setting collapsible: false while collapsed; open first panel
            if ( key === "collapsible" && !value && this.options.active === false ) {
                this._activate( 0 );
            }

            if ( key === "icons" ) {
                this._destroyIcons();
                if ( value ) {
                    this._createIcons();
                }
            }

            // #5332 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            if ( key === "disabled" ) {
                this.element
                    .toggleClass( "ui-state-disabled", !!value )
                    .attr( "aria-disabled", value );
                this.headers.add( this.headers.next() )
                    .toggleClass( "ui-state-disabled", !!value );
            }
        },

        _keydown: function( event ) {
            if ( event.altKey || event.ctrlKey ) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index( event.target ),
                toFocus = false;

            switch ( event.keyCode ) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[ ( currentIndex + 1 ) % length ];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler( event );
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[ 0 ];
                    break;
                case keyCode.END:
                    toFocus = this.headers[ length - 1 ];
                    break;
            }

            if ( toFocus ) {
                $( event.target ).attr( "tabIndex", -1 );
                $( toFocus ).attr( "tabIndex", 0 );
                toFocus.focus();
                event.preventDefault();
            }
        },

        _panelKeyDown: function( event ) {
            if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
                $( event.currentTarget ).prev().focus();
            }
        },

        refresh: function() {
            var options = this.options;
            this._processPanels();

            // was collapsed or no panel
            if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
                options.active = false;
                this.active = $();
                // active false only when collapsible is true
            } else if ( options.active === false ) {
                this._activate( 0 );
                // was active, but active panel is gone
            } else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
                // all remaining panel are disabled
                if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
                    options.active = false;
                    this.active = $();
                    // activate previous panel
                } else {
                    this._activate( Math.max( 0, options.active - 1 ) );
                }
                // was active, active panel still exists
            } else {
                // make sure active index is correct
                options.active = this.headers.index( this.active );
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function() {
            this.headers = this.element.find( this.options.header )
                .addClass( "ui-accordion-header ui-state-default ui-corner-all" );

            this.headers.next()
                .addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
                .filter( ":not(.ui-accordion-content-active)" )
                .hide();
        },

        _refresh: function() {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive( options.active )
                .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
                .removeClass( "ui-corner-all" );
            this.active.next()
                .addClass( "ui-accordion-content-active" )
                .show();

            this.headers
                .attr( "role", "tab" )
                .each(function() {
                    var header = $( this ),
                        headerId = header.uniqueId().attr( "id" ),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr( "id" );
                    header.attr( "aria-controls", panelId );
                    panel.attr( "aria-labelledby", headerId );
                })
                .next()
                .attr( "role", "tabpanel" );

            this.headers
                .not( this.active )
                .attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                })
                .next()
                .attr({
                    "aria-hidden": "true"
                })
                .hide();

            // make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
                    .next()
                    .attr({
                        "aria-hidden": "false"
                    });
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each(function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                });

                this.headers.each(function() {
                    maxHeight -= $( this ).outerHeight( true );
                });

                this.headers.next()
                    .each(function() {
                        $( this ).height( Math.max( 0, maxHeight -
                        $( this ).innerHeight() + $( this ).height() ) );
                    })
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                    .each(function() {
                        maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                    })
                    .height( maxHeight );
            }
        },

        _activate: function( index ) {
            var active = this._findActive( index )[ 0 ];

            // trying to activate the already active panel
            if ( active === this.active[ 0 ] ) {
                return;
            }

            // trying to collapse, simulate a click on the currently active header
            active = active || this.active[ 0 ];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function( selector ) {
            return typeof selector === "number" ? this.headers.eq( selector ) : $();
        },

        _setupEvents: function( event ) {
            var events = {
                keydown: "_keydown"
            };
            if ( event ) {
                $.each( event.split( " " ), function( index, eventName ) {
                    events[ eventName ] = "_eventHandler";
                });
            }

            this._off( this.headers.add( this.headers.next() ) );
            this._on( this.headers, events );
            this._on( this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable( this.headers );
            this._focusable( this.headers );
        },

        _eventHandler: function( event ) {
            var options = this.options,
                active = this.active,
                clicked = $( event.currentTarget ),
                clickedIsActive = clicked[ 0 ] === active[ 0 ],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };

            event.preventDefault();

            if (
                // click on active header, but not collapsible
            ( clickedIsActive && !options.collapsible ) ||
                // allow canceling activation
            ( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
                return;
            }

            options.active = collapsing ? false : this.headers.index( clicked );

            // when the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle( eventData );

            // switch classes
            // corner classes on the previously active header stay after the animation
            active.removeClass( "ui-accordion-header-active ui-state-active" );
            if ( options.icons ) {
                active.children( ".ui-accordion-header-icon" )
                    .removeClass( options.icons.activeHeader )
                    .addClass( options.icons.header );
            }

            if ( !clickedIsActive ) {
                clicked
                    .removeClass( "ui-corner-all" )
                    .addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
                if ( options.icons ) {
                    clicked.children( ".ui-accordion-header-icon" )
                        .removeClass( options.icons.header )
                        .addClass( options.icons.activeHeader );
                }

                clicked
                    .next()
                    .addClass( "ui-accordion-content-active" );
            }
        },

        _toggle: function( data ) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // handle activating a panel during the animation for another activation
            this.prevShow.add( this.prevHide ).stop( true, true );
            this.prevShow = toShow;
            this.prevHide = toHide;

            if ( this.options.animate ) {
                this._animate( toShow, toHide, data );
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete( data );
            }

            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr( "aria-selected", "false" );
            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if ( toShow.length && toHide.length ) {
                toHide.prev().attr({
                    "tabIndex": -1,
                    "aria-expanded": "false"
                });
            } else if ( toShow.length ) {
                this.headers.filter(function() {
                    return $( this ).attr( "tabIndex" ) === 0;
                })
                    .attr( "tabIndex", -1 );
            }

            toShow
                .attr( "aria-hidden", "false" )
                .prev()
                .attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                });
        },

        _animate: function( toShow, toHide, data ) {
            var total, easing, duration,
                that = this,
                adjust = 0,
                down = toShow.length &&
                    ( !toHide.length || ( toShow.index() < toHide.index() ) ),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function() {
                    that._toggleComplete( data );
                };

            if ( typeof options === "number" ) {
                duration = options;
            }
            if ( typeof options === "string" ) {
                easing = options;
            }
            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if ( !toHide.length ) {
                return toShow.animate( this.showProps, duration, easing, complete );
            }
            if ( !toShow.length ) {
                return toHide.animate( this.hideProps, duration, easing, complete );
            }

            total = toShow.show().outerHeight();
            toHide.animate( this.hideProps, {
                duration: duration,
                easing: easing,
                step: function( now, fx ) {
                    fx.now = Math.round( now );
                }
            });
            toShow
                .hide()
                .animate( this.showProps, {
                    duration: duration,
                    easing: easing,
                    complete: complete,
                    step: function( now, fx ) {
                        fx.now = Math.round( now );
                        if ( fx.prop !== "height" ) {
                            adjust += fx.now;
                        } else if ( that.options.heightStyle !== "content" ) {
                            fx.now = Math.round( total - toHide.outerHeight() - adjust );
                            adjust = 0;
                        }
                    }
                });
        },

        _toggleComplete: function( data ) {
            var toHide = data.oldPanel;

            toHide
                .removeClass( "ui-accordion-content-active" )
                .prev()
                .removeClass( "ui-corner-top" )
                .addClass( "ui-corner-all" );

            // Work around for rendering bug in IE (#5421)
            if ( toHide.length ) {
                toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
            }
            this._trigger( "activate", null, data );
        }
    });

}));

/**
 *
 * jquery.sparkline.js
 *
 * v2.1.2
 * (c) Splunk, Inc
 * Contact: Gareth Watts (gareth@splunk.com)
 * http://omnipotent.net/jquery.sparkline/
 *
 * Generates inline sparkline charts from data supplied either to the method
 * or inline in HTML
 *
 * Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
 * (Firefox 2.0+, Safari, Opera, etc)
 *
 * License: New BSD License
 *
 * Copyright (c) 2012, Splunk Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 *     * Neither the name of Splunk Inc nor the names of its contributors may
 *       be used to endorse or promote products derived from this software without
 *       specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
 * OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *
 * Usage:
 *  $(selector).sparkline(values, options)
 *
 * If values is undefined or set to 'html' then the data values are read from the specified tag:
 *   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
 *   $('.sparkline').sparkline();
 * There must be no spaces in the enclosed data set
 *
 * Otherwise values must be an array of numbers or null values
 *    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
 *    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
 *    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
 *
 * Values can also be specified in an HTML comment, or as a values attribute:
 *    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
 *    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
 *    $('.sparkline').sparkline();
 *
 * For line charts, x values can also be specified:
 *   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
 *    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
 *
 * By default, options should be passed in as teh second argument to the sparkline function:
 *   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
 *
 * Options can also be set by passing them on the tag itself.  This feature is disabled by default though
 * as there's a slight performance overhead:
 *   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
 *   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
 * Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionPrefix)
 *
 * Supported options:
 *   lineColor - Color of the line used for the chart
 *   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
 *   width - Width of the chart - Defaults to 3 times the number of values in pixels
 *   height - Height of the chart - Defaults to the height of the containing element
 *   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
 *   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
 *   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
 *   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
 *   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
 *   composite - If true then don't erase any existing chart attached to the tag, but draw
 *           another chart over the top - Note that width and height are ignored if an
 *           existing chart is detected.
 *   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
 *   enableTagOptions - Whether to check tags for sparkline options
 *   tagOptionPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
 *   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
 *           hidden dom element, avoding a browser reflow
 *   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
 *       making the plugin perform much like it did in 1.x
 *   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
 *   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
 *       defaults to false (highlights enabled)
 *   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
 *   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
 *   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
 *   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
 *   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
 *   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
 *       callback is given arguments of (sparkline, options, fields)
 *   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
 *   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
 *       to control the format of the tooltip
 *   tooltipPrefix - A string to prepend to each field displayed in a tooltip
 *   tooltipSuffix - A string to append to each field displayed in a tooltip
 *   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
 *   tooltipValueLookups - An object or range map to map field values to tooltip strings
 *       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
 *   numberFormatter - Optional callback for formatting numbers in tooltips
 *   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
 *   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
 *   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
 *
 * There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
 * 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
 *    line - Line chart.  Options:
 *       spotColor - Set to '' to not end each line in a circular spot
 *       minSpotColor - If set, color of spot at minimum value
 *       maxSpotColor - If set, color of spot at maximum value
 *       spotRadius - Radius in pixels
 *       lineWidth - Width of line in pixels
 *       normalRangeMin
 *       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
 *                      or expected range of values
 *       normalRangeColor - Color to use for the above bar
 *       drawNormalOnTop - Draw the normal range above the chart fill color if true
 *       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
 *       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
 *       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
 *       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
 *
 *   bar - Bar chart.  Options:
 *       barColor - Color of bars for postive values
 *       negBarColor - Color of bars for negative values
 *       zeroColor - Color of bars with zero values
 *       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
 *       barWidth - Width of bars in pixels
 *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
 *                  can be an Array of values to control the color of individual bars or a range map
 *                  to specify colors for individual ranges of values
 *       barSpacing - Gap between bars in pixels
 *       zeroAxis - Centers the y-axis around zero if true
 *
 *   tristate - Charts values of win (>0), lose (<0) or draw (=0)
 *       posBarColor - Color of win values
 *       negBarColor - Color of lose values
 *       zeroBarColor - Color of draw values
 *       barWidth - Width of bars in pixels
 *       barSpacing - Gap between bars in pixels
 *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
 *                  can be an Array of values to control the color of individual bars or a range map
 *                  to specify colors for individual ranges of values
 *
 *   discrete - Options:
 *       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
 *       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
 *       thresholdColor
 *
 *   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
 *       options:
 *       targetColor - The color of the vertical target marker
 *       targetWidth - The width of the target marker in pixels
 *       performanceColor - The color of the performance measure horizontal bar
 *       rangeColors - Colors to use for each qualitative range background color
 *
 *   pie - Pie chart. Options:
 *       sliceColors - An array of colors to use for pie slices
 *       offset - Angle in degrees to offset the first slice - Try -90 or +90
 *       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
 *       borderColor - Color to use for the pie chart border - Defaults to #000
 *
 *   box - Box plot. Options:
 *       raw - Set to true to supply pre-computed plot points as values
 *             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
 *             When set to false you can supply any number of values and the box plot will
 *             be computed for you.  Default is false.
 *       showOutliers - Set to true (default) to display outliers as circles
 *       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
 *       boxLineColor - Outline color of the box
 *       boxFillColor - Fill color for the box
 *       whiskerColor - Line color used for whiskers
 *       outlierLineColor - Outline color of outlier circles
 *       outlierFillColor - Fill color of the outlier circles
 *       spotRadius - Radius of outlier circles
 *       medianColor - Line color of the median line
 *       target - Draw a target cross hair at the supplied value (default undefined)
 *
 *
 *
 *   Examples:
 *   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
 *   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
 *   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
 *   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
 *   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
 *   $('#pie').sparkline([1,1,2], { type:'pie' });
 */

/*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */

(function(document, Math, undefined) { // performance/minified-size optimization
    (function(factory) {
        if(typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (jQuery && !jQuery.fn.sparkline) {
            factory(jQuery);
        }
    }
    (function($) {
        'use strict';

        var UNSET_OPTION = {},
            getDefaults, createClass, SPFormat, clipval, quartile, normalizeValue, normalizeValues,
            remove, isNumber, all, sum, addCSS, ensureArray, formatNumber, RangeMap,
            MouseHandler, Tooltip, barHighlightMixin,
            line, bar, tristate, discrete, bullet, pie, box, defaultStyles, initStyles,
            VShape, VCanvas_base, VCanvas_canvas, VCanvas_vml, pending, shapeCount = 0;

        /**
         * Default configuration settings
         */
        getDefaults = function () {
            return {
                // Settings common to most/all chart types
                common: {
                    type: 'line',
                    lineColor: '#00f',
                    fillColor: '#cdf',
                    defaultPixelsPerValue: 3,
                    width: 'auto',
                    height: 'auto',
                    composite: false,
                    tagValuesAttribute: 'values',
                    tagOptionsPrefix: 'spark',
                    enableTagOptions: false,
                    enableHighlight: true,
                    highlightLighten: 1.4,
                    tooltipSkipNull: true,
                    tooltipPrefix: '',
                    tooltipSuffix: '',
                    disableHiddenCheck: false,
                    numberFormatter: false,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ',',
                    numberDecimalMark: '.',
                    disableTooltips: false,
                    disableInteraction: false
                },
                // Defaults for line charts
                line: {
                    spotColor: '#f80',
                    highlightSpotColor: '#5f5',
                    highlightLineColor: '#f22',
                    spotRadius: 1.5,
                    minSpotColor: '#f80',
                    maxSpotColor: '#f80',
                    lineWidth: 1,
                    normalRangeMin: undefined,
                    normalRangeMax: undefined,
                    normalRangeColor: '#ccc',
                    drawNormalOnTop: false,
                    chartRangeMin: undefined,
                    chartRangeMax: undefined,
                    chartRangeMinX: undefined,
                    chartRangeMaxX: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                // Defaults for bar charts
                bar: {
                    barColor: '#3366cc',
                    negBarColor: '#f44',
                    stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    zeroColor: undefined,
                    nullColor: undefined,
                    zeroAxis: true,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    colorMap: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for tristate charts
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: '#6f6',
                    negBarColor: '#f44',
                    zeroBarColor: '#999',
                    colorMap: {},
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: { map: { '-1': 'Loss', '0': 'Draw', '1': 'Win' } }
                },
                // Defaults for discrete charts
                discrete: {
                    lineHeight: 'auto',
                    thresholdColor: undefined,
                    thresholdValue: 0,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for bullet charts
                bullet: {
                    targetColor: '#f33',
                    targetWidth: 3, // width of the target bar in pixels
                    performanceColor: '#33f',
                    rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
                    base: undefined, // set this to a number to change the base start number
                    tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
                    tooltipValueLookups: { fields: {r: 'Range', p: 'Performance', t: 'Target'} }
                },
                // Defaults for pie charts
                pie: {
                    offset: 0,
                    sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    borderWidth: 0,
                    borderColor: '#000',
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                // Defaults for box plots
                box: {
                    raw: false,
                    boxLineColor: '#000',
                    boxFillColor: '#cdf',
                    whiskerColor: '#000',
                    outlierLineColor: '#333',
                    outlierFillColor: '#fff',
                    medianColor: '#f00',
                    showOutliers: true,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: undefined,
                    targetColor: '#4a2',
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
                    tooltipFormatFieldlistKey: 'field',
                    tooltipValueLookups: { fields: { lq: 'Lower Quartile', med: 'Median',
                        uq: 'Upper Quartile', lo: 'Left Outlier', ro: 'Right Outlier',
                        lw: 'Left Whisker', rw: 'Right Whisker'} }
                }
            };
        };

        // You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
        defaultStyles = '.jqstooltip { ' +
        'position: absolute;' +
        'left: 0px;' +
        'top: 0px;' +
        'visibility: hidden;' +
        'background: rgb(0, 0, 0) transparent;' +
        'background-color: rgba(0,0,0,0.6);' +
        'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' +
        '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' +
        'color: white;' +
        'font: 10px arial, san serif;' +
        'text-align: left;' +
        'white-space: nowrap;' +
        'padding: 5px;' +
        'border: 1px solid white;' +
        'z-index: 10000;' +
        '}' +
        '.jqsfield { ' +
        'color: white;' +
        'font: 10px arial, san serif;' +
        'text-align: left;' +
        '}';

        /**
         * Utilities
         */

        createClass = function (/* [baseclass, [mixin, ...]], definition */) {
            var Class, args;
            Class = function () {
                this.init.apply(this, arguments);
            };
            if (arguments.length > 1) {
                if (arguments[0]) {
                    Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
                    Class._super = arguments[0].prototype;
                } else {
                    Class.prototype = arguments[arguments.length - 1];
                }
                if (arguments.length > 2) {
                    args = Array.prototype.slice.call(arguments, 1, -1);
                    args.unshift(Class.prototype);
                    $.extend.apply($, args);
                }
            } else {
                Class.prototype = arguments[0];
            }
            Class.prototype.cls = Class;
            return Class;
        };

        /**
         * Wraps a format string for tooltips
         * {{x}}
         * {{x.2}
     * {{x:months}}
     */
        $.SPFormatClass = SPFormat = createClass({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,

            init: function (format, fclass) {
                this.format = format;
                this.fclass = fclass;
            },

            render: function (fieldset, lookups, options) {
                var self = this,
                    fields = fieldset,
                    match, token, lookupkey, fieldvalue, prec;
                return this.format.replace(this.fre, function () {
                    var lookup;
                    token = arguments[1];
                    lookupkey = arguments[3];
                    match = self.precre.exec(token);
                    if (match) {
                        prec = match[2];
                        token = match[1];
                    } else {
                        prec = false;
                    }
                    fieldvalue = fields[token];
                    if (fieldvalue === undefined) {
                        return '';
                    }
                    if (lookupkey && lookups && lookups[lookupkey]) {
                        lookup = lookups[lookupkey];
                        if (lookup.get) { // RangeMap
                            return lookups[lookupkey].get(fieldvalue) || fieldvalue;
                        } else {
                            return lookups[lookupkey][fieldvalue] || fieldvalue;
                        }
                    }
                    if (isNumber(fieldvalue)) {
                        if (options.get('numberFormatter')) {
                            fieldvalue = options.get('numberFormatter')(fieldvalue);
                        } else {
                            fieldvalue = formatNumber(fieldvalue, prec,
                                options.get('numberDigitGroupCount'),
                                options.get('numberDigitGroupSep'),
                                options.get('numberDecimalMark'));
                        }
                    }
                    return fieldvalue;
                });
            }
        });

        // convience method to avoid needing the new operator
        $.spformat = function(format, fclass) {
            return new SPFormat(format, fclass);
        };

        clipval = function (val, min, max) {
            if (val < min) {
                return min;
            }
            if (val > max) {
                return max;
            }
            return val;
        };

        quartile = function (values, q) {
            var vl;
            if (q === 2) {
                vl = Math.floor(values.length / 2);
                return values.length % 2 ? values[vl] : (values[vl-1] + values[vl]) / 2;
            } else {
                if (values.length % 2 ) { // odd
                    vl = (values.length * q + q) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl-1];
                } else { //even
                    vl = (values.length * q + 2) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 :  values[vl-1];

                }
            }
        };

        normalizeValue = function (val) {
            var nf;
            switch (val) {
                case 'undefined':
                    val = undefined;
                    break;
                case 'null':
                    val = null;
                    break;
                case 'true':
                    val = true;
                    break;
                case 'false':
                    val = false;
                    break;
                default:
                    nf = parseFloat(val);
                    if (val == nf) {
                        val = nf;
                    }
            }
            return val;
        };

        normalizeValues = function (vals) {
            var i, result = [];
            for (i = vals.length; i--;) {
                result[i] = normalizeValue(vals[i]);
            }
            return result;
        };

        remove = function (vals, filter) {
            var i, vl, result = [];
            for (i = 0, vl = vals.length; i < vl; i++) {
                if (vals[i] !== filter) {
                    result.push(vals[i]);
                }
            }
            return result;
        };

        isNumber = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        };

        formatNumber = function (num, prec, groupsize, groupsep, decsep) {
            var p, i;
            num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
            p = (p = $.inArray('.', num)) < 0 ? num.length : p;
            if (p < num.length) {
                num[p] = decsep;
            }
            for (i = p - groupsize; i > 0; i -= groupsize) {
                num.splice(i, 0, groupsep);
            }
            return num.join('');
        };

        // determine if all values of an array match a value
        // returns true if the array is empty
        all = function (val, arr, ignoreNull) {
            var i;
            for (i = arr.length; i--; ) {
                if (ignoreNull && arr[i] === null) continue;
                if (arr[i] !== val) {
                    return false;
                }
            }
            return true;
        };

        // sums the numeric values in an array, ignoring other values
        sum = function (vals) {
            var total = 0, i;
            for (i = vals.length; i--;) {
                total += typeof vals[i] === 'number' ? vals[i] : 0;
            }
            return total;
        };

        ensureArray = function (val) {
            return $.isArray(val) ? val : [val];
        };

        // http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
        addCSS = function(css) {
            var tag;
            //if ('\v' == 'v') /* ie only */ {
            if (document.createStyleSheet) {
                document.createStyleSheet().cssText = css;
            } else {
                tag = document.createElement('style');
                tag.type = 'text/css';
                document.getElementsByTagName('head')[0].appendChild(tag);
                tag[(typeof document.body.style.WebkitAppearance == 'string') /* webkit only */ ? 'innerText' : 'innerHTML'] = css;
            }
        };

        // Provide a cross-browser interface to a few simple drawing primitives
        $.fn.simpledraw = function (width, height, useExisting, interact) {
            var target, mhandler;
            if (useExisting && (target = this.data('_jqs_vcanvas'))) {
                return target;
            }

            if ($.fn.sparkline.canvas === false) {
                // We've already determined that neither Canvas nor VML are available
                return false;

            } else if ($.fn.sparkline.canvas === undefined) {
                // No function defined yet -- need to see if we support Canvas or VML
                var el = document.createElement('canvas');
                if (!!(el.getContext && el.getContext('2d'))) {
                    // Canvas is available
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_canvas(width, height, target, interact);
                    };
                } else if (document.namespaces && !document.namespaces.v) {
                    // VML is available
                    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_vml(width, height, target);
                    };
                } else {
                    // Neither Canvas nor VML are available
                    $.fn.sparkline.canvas = false;
                    return false;
                }
            }

            if (width === undefined) {
                width = $(this).innerWidth();
            }
            if (height === undefined) {
                height = $(this).innerHeight();
            }

            target = $.fn.sparkline.canvas(width, height, this, interact);

            mhandler = $(this).data('_jqs_mhandler');
            if (mhandler) {
                mhandler.registerCanvas(target);
            }
            return target;
        };

        $.fn.cleardraw = function () {
            var target = this.data('_jqs_vcanvas');
            if (target) {
                target.reset();
            }
        };

        $.RangeMapClass = RangeMap = createClass({
            init: function (map) {
                var key, range, rangelist = [];
                for (key in map) {
                    if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
                        range = key.split(':');
                        range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
                        range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
                        range[2] = map[key];
                        rangelist.push(range);
                    }
                }
                this.map = map;
                this.rangelist = rangelist || false;
            },

            get: function (value) {
                var rangelist = this.rangelist,
                    i, range, result;
                if ((result = this.map[value]) !== undefined) {
                    return result;
                }
                if (rangelist) {
                    for (i = rangelist.length; i--;) {
                        range = rangelist[i];
                        if (range[0] <= value && range[1] >= value) {
                            return range[2];
                        }
                    }
                }
                return undefined;
            }
        });

        // Convenience function
        $.range_map = function(map) {
            return new RangeMap(map);
        };

        MouseHandler = createClass({
            init: function (el, options) {
                var $el = $(el);
                this.$el = $el;
                this.options = options;
                this.currentPageX = 0;
                this.currentPageY = 0;
                this.el = el;
                this.splist = [];
                this.tooltip = null;
                this.over = false;
                this.displayTooltips = !options.get('disableTooltips');
                this.highlightEnabled = !options.get('disableHighlight');
            },

            registerSparkline: function (sp) {
                this.splist.push(sp);
                if (this.over) {
                    this.updateDisplay();
                }
            },

            registerCanvas: function (canvas) {
                var $canvas = $(canvas.canvas);
                this.canvas = canvas;
                this.$canvas = $canvas;
                $canvas.mouseenter($.proxy(this.mouseenter, this));
                $canvas.mouseleave($.proxy(this.mouseleave, this));
                $canvas.click($.proxy(this.mouseclick, this));
            },

            reset: function (removeTooltip) {
                this.splist = [];
                if (this.tooltip && removeTooltip) {
                    this.tooltip.remove();
                    this.tooltip = undefined;
                }
            },

            mouseclick: function (e) {
                var clickEvent = $.Event('sparklineClick');
                clickEvent.originalEvent = e;
                clickEvent.sparklines = this.splist;
                this.$el.trigger(clickEvent);
            },

            mouseenter: function (e) {
                $(document.body).unbind('mousemove.jqs');
                $(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
                this.over = true;
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (!this.tooltip && this.displayTooltips) {
                    this.tooltip = new Tooltip(this.options);
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },

            mouseleave: function () {
                $(document.body).unbind('mousemove.jqs');
                var splist = this.splist,
                    spcount = splist.length,
                    needsRefresh = false,
                    sp, i;
                this.over = false;
                this.currentEl = null;

                if (this.tooltip) {
                    this.tooltip.remove();
                    this.tooltip = null;
                }

                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    if (sp.clearRegionHighlight()) {
                        needsRefresh = true;
                    }
                }

                if (needsRefresh) {
                    this.canvas.render();
                }
            },

            mousemove: function (e) {
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (this.tooltip) {
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },

            updateDisplay: function () {
                var splist = this.splist,
                    spcount = splist.length,
                    needsRefresh = false,
                    offset = this.$canvas.offset(),
                    localX = this.currentPageX - offset.left,
                    localY = this.currentPageY - offset.top,
                    tooltiphtml, sp, i, result, changeEvent;
                if (!this.over) {
                    return;
                }
                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    result = sp.setRegionHighlight(this.currentEl, localX, localY);
                    if (result) {
                        needsRefresh = true;
                    }
                }
                if (needsRefresh) {
                    changeEvent = $.Event('sparklineRegionChange');
                    changeEvent.sparklines = this.splist;
                    this.$el.trigger(changeEvent);
                    if (this.tooltip) {
                        tooltiphtml = '';
                        for (i = 0; i < spcount; i++) {
                            sp = splist[i];
                            tooltiphtml += sp.getCurrentRegionTooltip();
                        }
                        this.tooltip.setContent(tooltiphtml);
                    }
                    if (!this.disableHighlight) {
                        this.canvas.render();
                    }
                }
                if (result === null) {
                    this.mouseleave();
                }
            }
        });


        Tooltip = createClass({
            sizeStyle: 'position: static !important;' +
            'display: block !important;' +
            'visibility: hidden !important;' +
            'float: left !important;',

            init: function (options) {
                var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
                    sizetipStyle = this.sizeStyle,
                    offset;
                this.container = options.get('tooltipContainer') || document.body;
                this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
                this.tooltipOffsetY = options.get('tooltipOffsetY', 12);
                // remove any previous lingering tooltip
                $('#jqssizetip').remove();
                $('#jqstooltip').remove();
                this.sizetip = $('<div/>', {
                    id: 'jqssizetip',
                    style: sizetipStyle,
                    'class': tooltipClassname
                });
                this.tooltip = $('<div/>', {
                    id: 'jqstooltip',
                    'class': tooltipClassname
                }).appendTo(this.container);
                // account for the container's location
                offset = this.tooltip.offset();
                this.offsetLeft = offset.left;
                this.offsetTop = offset.top;
                this.hidden = true;
                $(window).unbind('resize.jqs scroll.jqs');
                $(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
                this.updateWindowDims();
            },

            updateWindowDims: function () {
                this.scrollTop = $(window).scrollTop();
                this.scrollLeft = $(window).scrollLeft();
                this.scrollRight = this.scrollLeft + $(window).width();
                this.updatePosition();
            },

            getSize: function (content) {
                this.sizetip.html(content).appendTo(this.container);
                this.width = this.sizetip.width() + 1;
                this.height = this.sizetip.height();
                this.sizetip.remove();
            },

            setContent: function (content) {
                if (!content) {
                    this.tooltip.css('visibility', 'hidden');
                    this.hidden = true;
                    return;
                }
                this.getSize(content);
                this.tooltip.html(content)
                    .css({
                        'width': this.width,
                        'height': this.height,
                        'visibility': 'visible'
                    });
                if (this.hidden) {
                    this.hidden = false;
                    this.updatePosition();
                }
            },

            updatePosition: function (x, y) {
                if (x === undefined) {
                    if (this.mousex === undefined) {
                        return;
                    }
                    x = this.mousex - this.offsetLeft;
                    y = this.mousey - this.offsetTop;

                } else {
                    this.mousex = x = x - this.offsetLeft;
                    this.mousey = y = y - this.offsetTop;
                }
                if (!this.height || !this.width || this.hidden) {
                    return;
                }

                y -= this.height + this.tooltipOffsetY;
                x += this.tooltipOffsetX;

                if (y < this.scrollTop) {
                    y = this.scrollTop;
                }
                if (x < this.scrollLeft) {
                    x = this.scrollLeft;
                } else if (x + this.width > this.scrollRight) {
                    x = this.scrollRight - this.width;
                }

                this.tooltip.css({
                    'left': x,
                    'top': y
                });
            },

            remove: function () {
                this.tooltip.remove();
                this.sizetip.remove();
                this.sizetip = this.tooltip = undefined;
                $(window).unbind('resize.jqs scroll.jqs');
            }
        });

        initStyles = function() {
            addCSS(defaultStyles);
        };

        $(initStyles);

        pending = [];
        $.fn.sparkline = function (userValues, userOptions) {
            return this.each(function () {
                var options = new $.fn.sparkline.options(this, userOptions),
                    $this = $(this),
                    render, i;
                render = function () {
                    var values, width, height, tmp, mhandler, sp, vals;
                    if (userValues === 'html' || userValues === undefined) {
                        vals = this.getAttribute(options.get('tagValuesAttribute'));
                        if (vals === undefined || vals === null) {
                            vals = $this.html();
                        }
                        values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
                    } else {
                        values = userValues;
                    }

                    width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');
                    if (options.get('height') === 'auto') {
                        if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
                            // must be a better way to get the line height
                            tmp = document.createElement('span');
                            tmp.innerHTML = 'a';
                            $this.html(tmp);
                            height = $(tmp).innerHeight() || $(tmp).height();
                            $(tmp).remove();
                            tmp = null;
                        }
                    } else {
                        height = options.get('height');
                    }

                    if (!options.get('disableInteraction')) {
                        mhandler = $.data(this, '_jqs_mhandler');
                        if (!mhandler) {
                            mhandler = new MouseHandler(this, options);
                            $.data(this, '_jqs_mhandler', mhandler);
                        } else if (!options.get('composite')) {
                            mhandler.reset();
                        }
                    } else {
                        mhandler = false;
                    }

                    if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
                        if (!$.data(this, '_jqs_errnotify')) {
                            alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
                            $.data(this, '_jqs_errnotify', true);
                        }
                        return;
                    }

                    sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);

                    sp.render();

                    if (mhandler) {
                        mhandler.registerSparkline(sp);
                    }
                };
                if (($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden')) || !$(this).parents('body').length) {
                    if (!options.get('composite') && $.data(this, '_jqs_pending')) {
                        // remove any existing references to the element
                        for (i = pending.length; i; i--) {
                            if (pending[i - 1][0] == this) {
                                pending.splice(i - 1, 1);
                            }
                        }
                    }
                    pending.push([this, render]);
                    $.data(this, '_jqs_pending', true);
                } else {
                    render.call(this);
                }
            });
        };

        $.fn.sparkline.defaults = getDefaults();


        $.sparkline_display_visible = function () {
            var el, i, pl;
            var done = [];
            for (i = 0, pl = pending.length; i < pl; i++) {
                el = pending[i][0];
                if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
                    pending[i][1].call(el);
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                } else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
                    // element has been inserted and removed from the DOM
                    // If it was not yet inserted into the dom then the .data request
                    // will return true.
                    // removing from the dom causes the data to be removed.
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                }
            }
            for (i = done.length; i; i--) {
                pending.splice(done[i - 1], 1);
            }
        };


        /**
         * User option handler
         */
        $.fn.sparkline.options = createClass({
            init: function (tag, userOptions) {
                var extendedOptions, defaults, base, tagOptionType;
                this.userOptions = userOptions = userOptions || {};
                this.tag = tag;
                this.tagValCache = {};
                defaults = $.fn.sparkline.defaults;
                base = defaults.common;
                this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);

                tagOptionType = this.getTagSetting('type');
                if (tagOptionType === UNSET_OPTION) {
                    extendedOptions = defaults[userOptions.type || base.type];
                } else {
                    extendedOptions = defaults[tagOptionType];
                }
                this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
            },


            getTagSetting: function (key) {
                var prefix = this.tagOptionsPrefix,
                    val, i, pairs, keyval;
                if (prefix === false || prefix === undefined) {
                    return UNSET_OPTION;
                }
                if (this.tagValCache.hasOwnProperty(key)) {
                    val = this.tagValCache.key;
                } else {
                    val = this.tag.getAttribute(prefix + key);
                    if (val === undefined || val === null) {
                        val = UNSET_OPTION;
                    } else if (val.substr(0, 1) === '[') {
                        val = val.substr(1, val.length - 2).split(',');
                        for (i = val.length; i--;) {
                            val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else if (val.substr(0, 1) === '{') {
                        pairs = val.substr(1, val.length - 2).split(',');
                        val = {};
                        for (i = pairs.length; i--;) {
                            keyval = pairs[i].split(':', 2);
                            val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else {
                        val = normalizeValue(val);
                    }
                    this.tagValCache.key = val;
                }
                return val;
            },

            get: function (key, defaultval) {
                var tagOption = this.getTagSetting(key),
                    result;
                if (tagOption !== UNSET_OPTION) {
                    return tagOption;
                }
                return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
            }
        });


        $.fn.sparkline._base = createClass({
            disabled: false,

            init: function (el, values, options, width, height) {
                this.el = el;
                this.$el = $(el);
                this.values = values;
                this.options = options;
                this.width = width;
                this.height = height;
                this.currentRegion = undefined;
            },

            /**
             * Setup the canvas
             */
            initTarget: function () {
                var interactive = !this.options.get('disableInteraction');
                if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
                    this.disabled = true;
                } else {
                    this.canvasWidth = this.target.pixelWidth;
                    this.canvasHeight = this.target.pixelHeight;
                }
            },

            /**
             * Actually render the chart to the canvas
             */
            render: function () {
                if (this.disabled) {
                    this.el.innerHTML = '';
                    return false;
                }
                return true;
            },

            /**
             * Return a region id for a given x/y co-ordinate
             */
            getRegion: function (x, y) {
            },

            /**
             * Highlight an item based on the moused-over x,y co-ordinate
             */
            setRegionHighlight: function (el, x, y) {
                var currentRegion = this.currentRegion,
                    highlightEnabled = !this.options.get('disableHighlight'),
                    newRegion;
                if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
                    return null;
                }
                newRegion = this.getRegion(el, x, y);
                if (currentRegion !== newRegion) {
                    if (currentRegion !== undefined && highlightEnabled) {
                        this.removeHighlight();
                    }
                    this.currentRegion = newRegion;
                    if (newRegion !== undefined && highlightEnabled) {
                        this.renderHighlight();
                    }
                    return true;
                }
                return false;
            },

            /**
             * Reset any currently highlighted item
             */
            clearRegionHighlight: function () {
                if (this.currentRegion !== undefined) {
                    this.removeHighlight();
                    this.currentRegion = undefined;
                    return true;
                }
                return false;
            },

            renderHighlight: function () {
                this.changeHighlight(true);
            },

            removeHighlight: function () {
                this.changeHighlight(false);
            },

            changeHighlight: function (highlight)  {},

            /**
             * Fetch the HTML to display as a tooltip
             */
            getCurrentRegionTooltip: function () {
                var options = this.options,
                    header = '',
                    entries = [],
                    fields, formats, formatlen, fclass, text, i,
                    showFields, showFieldsKey, newFields, fv,
                    formatter, format, fieldlen, j;
                if (this.currentRegion === undefined) {
                    return '';
                }
                fields = this.getCurrentRegionFields();
                formatter = options.get('tooltipFormatter');
                if (formatter) {
                    return formatter(this, options, fields);
                }
                if (options.get('tooltipChartTitle')) {
                    header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
                }
                formats = this.options.get('tooltipFormat');
                if (!formats) {
                    return '';
                }
                if (!$.isArray(formats)) {
                    formats = [formats];
                }
                if (!$.isArray(fields)) {
                    fields = [fields];
                }
                showFields = this.options.get('tooltipFormatFieldlist');
                showFieldsKey = this.options.get('tooltipFormatFieldlistKey');
                if (showFields && showFieldsKey) {
                    // user-selected ordering of fields
                    newFields = [];
                    for (i = fields.length; i--;) {
                        fv = fields[i][showFieldsKey];
                        if ((j = $.inArray(fv, showFields)) != -1) {
                            newFields[j] = fields[i];
                        }
                    }
                    fields = newFields;
                }
                formatlen = formats.length;
                fieldlen = fields.length;
                for (i = 0; i < formatlen; i++) {
                    format = formats[i];
                    if (typeof format === 'string') {
                        format = new SPFormat(format);
                    }
                    fclass = format.fclass || 'jqsfield';
                    for (j = 0; j < fieldlen; j++) {
                        if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
                            $.extend(fields[j], {
                                prefix: options.get('tooltipPrefix'),
                                suffix: options.get('tooltipSuffix')
                            });
                            text = format.render(fields[j], options.get('tooltipValueLookups'), options);
                            entries.push('<div class="' + fclass + '">' + text + '</div>');
                        }
                    }
                }
                if (entries.length) {
                    return header + entries.join('\n');
                }
                return '';
            },

            getCurrentRegionFields: function () {},

            calcHighlightColor: function (color, options) {
                var highlightColor = options.get('highlightColor'),
                    lighten = options.get('highlightLighten'),
                    parse, mult, rgbnew, i;
                if (highlightColor) {
                    return highlightColor;
                }
                if (lighten) {
                    // extract RGB values
                    parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
                    if (parse) {
                        rgbnew = [];
                        mult = color.length === 4 ? 16 : 1;
                        for (i = 0; i < 3; i++) {
                            rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
                        }
                        return 'rgb(' + rgbnew.join(',') + ')';
                    }

                }
                return color;
            }

        });

        barHighlightMixin = {
            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    shapeids = this.regionShapes[currentRegion],
                    newShapes;
                // will be null if the region value was null
                if (shapeids) {
                    newShapes = this.renderRegion(currentRegion, highlight);
                    if ($.isArray(newShapes) || $.isArray(shapeids)) {
                        target.replaceWithShapes(shapeids, newShapes);
                        this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
                            return newShape.id;
                        });
                    } else {
                        target.replaceWithShape(shapeids, newShapes);
                        this.regionShapes[currentRegion] = newShapes.id;
                    }
                }
            },

            render: function () {
                var values = this.values,
                    target = this.target,
                    regionShapes = this.regionShapes,
                    shapes, ids, i, j;

                if (!this.cls._super.render.call(this)) {
                    return;
                }
                for (i = values.length; i--;) {
                    shapes = this.renderRegion(i);
                    if (shapes) {
                        if ($.isArray(shapes)) {
                            ids = [];
                            for (j = shapes.length; j--;) {
                                shapes[j].append();
                                ids.push(shapes[j].id);
                            }
                            regionShapes[i] = ids;
                        } else {
                            shapes.append();
                            regionShapes[i] = shapes.id; // store just the shapeid
                        }
                    } else {
                        // null value
                        regionShapes[i] = null;
                    }
                }
                target.render();
            }
        };

        /**
         * Line charts
         */
        $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
            type: 'line',

            init: function (el, values, options, width, height) {
                line._super.init.call(this, el, values, options, width, height);
                this.vertices = [];
                this.regionMap = [];
                this.xvalues = [];
                this.yvalues = [];
                this.yminmax = [];
                this.hightlightSpotId = null;
                this.lastShapeId = null;
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                var i,
                    regionMap = this.regionMap; // maps regions to value positions
                for (i = regionMap.length; i--;) {
                    if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
                        return regionMap[i][2];
                    }
                }
                return undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.yvalues[currentRegion] === null,
                    x: this.xvalues[currentRegion],
                    y: this.yvalues[currentRegion],
                    color: this.options.get('lineColor'),
                    fillColor: this.options.get('fillColor'),
                    offset: currentRegion
                };
            },

            renderHighlight: function () {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    vertex = this.vertices[currentRegion],
                    options = this.options,
                    spotRadius = options.get('spotRadius'),
                    highlightSpotColor = options.get('highlightSpotColor'),
                    highlightLineColor = options.get('highlightLineColor'),
                    highlightSpot, highlightLine;

                if (!vertex) {
                    return;
                }
                if (spotRadius && highlightSpotColor) {
                    highlightSpot = target.drawCircle(vertex[0], vertex[1],
                        spotRadius, undefined, highlightSpotColor);
                    this.highlightSpotId = highlightSpot.id;
                    target.insertAfterShape(this.lastShapeId, highlightSpot);
                }
                if (highlightLineColor) {
                    highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0],
                        this.canvasTop + this.canvasHeight, highlightLineColor);
                    this.highlightLineId = highlightLine.id;
                    target.insertAfterShape(this.lastShapeId, highlightLine);
                }
            },

            removeHighlight: function () {
                var target = this.target;
                if (this.highlightSpotId) {
                    target.removeShapeId(this.highlightSpotId);
                    this.highlightSpotId = null;
                }
                if (this.highlightLineId) {
                    target.removeShapeId(this.highlightLineId);
                    this.highlightLineId = null;
                }
            },

            scanValues: function () {
                var values = this.values,
                    valcount = values.length,
                    xvalues = this.xvalues,
                    yvalues = this.yvalues,
                    yminmax = this.yminmax,
                    i, val, isStr, isArray, sp;
                for (i = 0; i < valcount; i++) {
                    val = values[i];
                    isStr = typeof(values[i]) === 'string';
                    isArray = typeof(values[i]) === 'object' && values[i] instanceof Array;
                    sp = isStr && values[i].split(':');
                    if (isStr && sp.length === 2) { // x:y
                        xvalues.push(Number(sp[0]));
                        yvalues.push(Number(sp[1]));
                        yminmax.push(Number(sp[1]));
                    } else if (isArray) {
                        xvalues.push(val[0]);
                        yvalues.push(val[1]);
                        yminmax.push(val[1]);
                    } else {
                        xvalues.push(i);
                        if (values[i] === null || values[i] === 'null') {
                            yvalues.push(null);
                        } else {
                            yvalues.push(Number(val));
                            yminmax.push(Number(val));
                        }
                    }
                }
                if (this.options.get('xvalues')) {
                    xvalues = this.options.get('xvalues');
                }

                this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
                this.miny = this.minyorg = Math.min.apply(Math, yminmax);

                this.maxx = Math.max.apply(Math, xvalues);
                this.minx = Math.min.apply(Math, xvalues);

                this.xvalues = xvalues;
                this.yvalues = yvalues;
                this.yminmax = yminmax;

            },

            processRangeOptions: function () {
                var options = this.options,
                    normalRangeMin = options.get('normalRangeMin'),
                    normalRangeMax = options.get('normalRangeMax');

                if (normalRangeMin !== undefined) {
                    if (normalRangeMin < this.miny) {
                        this.miny = normalRangeMin;
                    }
                    if (normalRangeMax > this.maxy) {
                        this.maxy = normalRangeMax;
                    }
                }
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
                    this.miny = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
                    this.maxy = options.get('chartRangeMax');
                }
                if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
                    this.minx = options.get('chartRangeMinX');
                }
                if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
                    this.maxx = options.get('chartRangeMaxX');
                }

            },

            drawNormalRange: function (canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
                var normalRangeMin = this.options.get('normalRangeMin'),
                    normalRangeMax = this.options.get('normalRangeMax'),
                    ytop = canvasTop + Math.round(canvasHeight - (canvasHeight * ((normalRangeMax - this.miny) / rangey))),
                    height = Math.round((canvasHeight * (normalRangeMax - normalRangeMin)) / rangey);
                this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
            },

            render: function () {
                var options = this.options,
                    target = this.target,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    vertices = this.vertices,
                    spotRadius = options.get('spotRadius'),
                    regionMap = this.regionMap,
                    rangex, rangey, yvallast,
                    canvasTop, canvasLeft,
                    vertex, path, paths, x, y, xnext, xpos, xposnext,
                    last, next, yvalcount, lineShapes, fillShapes, plen,
                    valueSpots, hlSpotsEnabled, color, xvalues, yvalues, i;

                if (!line._super.render.call(this)) {
                    return;
                }

                this.scanValues();
                this.processRangeOptions();

                xvalues = this.xvalues;
                yvalues = this.yvalues;

                if (!this.yminmax.length || this.yvalues.length < 2) {
                    // empty or all null valuess
                    return;
                }

                canvasTop = canvasLeft = 0;

                rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
                rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
                yvallast = this.yvalues.length - 1;

                if (spotRadius && (canvasWidth < (spotRadius * 4) || canvasHeight < (spotRadius * 4))) {
                    spotRadius = 0;
                }
                if (spotRadius) {
                    // adjust the canvas size as required so that spots will fit
                    hlSpotsEnabled = options.get('highlightSpotColor') &&  !options.get('disableInteraction');
                    if (hlSpotsEnabled || options.get('minSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.miny)) {
                        canvasHeight -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('maxSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.maxy)) {
                        canvasHeight -= Math.ceil(spotRadius);
                        canvasTop += Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled ||
                        ((options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy))) {
                        canvasLeft += Math.ceil(spotRadius);
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('spotColor') ||
                        (options.get('minSpotColor') || options.get('maxSpotColor') &&
                        (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy))) {
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                }


                canvasHeight--;

                if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }

                path = [];
                paths = [path];
                last = next = null;
                yvalcount = yvalues.length;
                for (i = 0; i < yvalcount; i++) {
                    x = xvalues[i];
                    xnext = xvalues[i + 1];
                    y = yvalues[i];
                    xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
                    xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
                    next = xpos + ((xposnext - xpos) / 2);
                    regionMap[i] = [last || 0, next, i];
                    last = next;
                    if (y === null) {
                        if (i) {
                            if (yvalues[i - 1] !== null) {
                                path = [];
                                paths.push(path);
                            }
                            vertices.push(null);
                        }
                    } else {
                        if (y < this.miny) {
                            y = this.miny;
                        }
                        if (y > this.maxy) {
                            y = this.maxy;
                        }
                        if (!path.length) {
                            // previous value was null
                            path.push([xpos, canvasTop + canvasHeight]);
                        }
                        vertex = [xpos, canvasTop + Math.round(canvasHeight - (canvasHeight * ((y - this.miny) / rangey)))];
                        path.push(vertex);
                        vertices.push(vertex);
                    }
                }

                lineShapes = [];
                fillShapes = [];
                plen = paths.length;
                for (i = 0; i < plen; i++) {
                    path = paths[i];
                    if (path.length) {
                        if (options.get('fillColor')) {
                            path.push([path[path.length - 1][0], (canvasTop + canvasHeight)]);
                            fillShapes.push(path.slice(0));
                            path.pop();
                        }
                        // if there's only a single point in this path, then we want to display it
                        // as a vertical line which means we keep path[0]  as is
                        if (path.length > 2) {
                            // else we want the first value
                            path[0] = [path[0][0], path[1][1]];
                        }
                        lineShapes.push(path);
                    }
                }

                // draw the fill first, then optionally the normal range, then the line on top of that
                plen = fillShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(fillShapes[i],
                        options.get('fillColor'), options.get('fillColor')).append();
                }

                if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }

                plen = lineShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(lineShapes[i], options.get('lineColor'), undefined,
                        options.get('lineWidth')).append();
                }

                if (spotRadius && options.get('valueSpots')) {
                    valueSpots = options.get('valueSpots');
                    if (valueSpots.get === undefined) {
                        valueSpots = new RangeMap(valueSpots);
                    }
                    for (i = 0; i < yvalcount; i++) {
                        color = valueSpots.get(yvalues[i]);
                        if (color) {
                            target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)),
                                canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[i] - this.miny) / rangey))),
                                spotRadius, undefined,
                                color).append();
                        }
                    }

                }
                if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
                    target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)),
                        canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[yvallast] - this.miny) / rangey))),
                        spotRadius, undefined,
                        options.get('spotColor')).append();
                }
                if (this.maxy !== this.minyorg) {
                    if (spotRadius && options.get('minSpotColor')) {
                        x = xvalues[$.inArray(this.minyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.minyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('minSpotColor')).append();
                    }
                    if (spotRadius && options.get('maxSpotColor')) {
                        x = xvalues[$.inArray(this.maxyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.maxyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('maxSpotColor')).append();
                    }
                }

                this.lastShapeId = target.getLastShapeId();
                this.canvasTop = canvasTop;
                target.render();
            }
        });

        /**
         * Bar charts
         */
        $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'bar',

            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10),
                    chartRangeMin = options.get('chartRangeMin'),
                    chartRangeMax = options.get('chartRangeMax'),
                    chartRangeClip = options.get('chartRangeClip'),
                    stackMin = Infinity,
                    stackMax = -Infinity,
                    isStackString, groupMin, groupMax, stackRanges,
                    numValues, i, vlen, range, zeroAxis, xaxisOffset, min, max, clipMin, clipMax,
                    stacked, vlist, j, slen, svals, val, yoffset, yMaxCalc, canvasHeightEf;
                bar._super.init.call(this, el, values, options, width, height);

                // scan values to determine whether to stack bars
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    val = values[i];
                    isStackString = typeof(val) === 'string' && val.indexOf(':') > -1;
                    if (isStackString || $.isArray(val)) {
                        stacked = true;
                        if (isStackString) {
                            val = values[i] = normalizeValues(val.split(':'));
                        }
                        val = remove(val, null); // min/max will treat null as zero
                        groupMin = Math.min.apply(Math, val);
                        groupMax = Math.max.apply(Math, val);
                        if (groupMin < stackMin) {
                            stackMin = groupMin;
                        }
                        if (groupMax > stackMax) {
                            stackMax = groupMax;
                        }
                    }
                }

                this.stacked = stacked;
                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

                this.initTarget();

                if (chartRangeClip) {
                    clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
                    clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
                }

                numValues = [];
                stackRanges = stacked ? [] : numValues;
                var stackTotals = [];
                var stackRangesNeg = [];
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    if (stacked) {
                        vlist = values[i];
                        values[i] = svals = [];
                        stackTotals[i] = 0;
                        stackRanges[i] = stackRangesNeg[i] = 0;
                        for (j = 0, slen = vlist.length; j < slen; j++) {
                            val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
                            if (val !== null) {
                                if (val > 0) {
                                    stackTotals[i] += val;
                                }
                                if (stackMin < 0 && stackMax > 0) {
                                    if (val < 0) {
                                        stackRangesNeg[i] += Math.abs(val);
                                    } else {
                                        stackRanges[i] += val;
                                    }
                                } else {
                                    stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                                }
                                numValues.push(val);
                            }
                        }
                    } else {
                        val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
                        val = values[i] = normalizeValue(val);
                        if (val !== null) {
                            numValues.push(val);
                        }
                    }
                }
                this.max = max = Math.max.apply(Math, numValues);
                this.min = min = Math.min.apply(Math, numValues);
                this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
                this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
                    min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
                    max = options.get('chartRangeMax');
                }

                this.zeroAxis = zeroAxis = options.get('zeroAxis', true);
                if (min <= 0 && max >= 0 && zeroAxis) {
                    xaxisOffset = 0;
                } else if (zeroAxis == false) {
                    xaxisOffset = min;
                } else if (min > 0) {
                    xaxisOffset = min;
                } else {
                    xaxisOffset = max;
                }
                this.xaxisOffset = xaxisOffset;

                range = stacked ? (Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg)) : max - min;

                // as we plot zero/min values a single pixel line, we add a pixel to all other
                // values - Reduce the effective canvas size to suit
                this.canvasHeightEf = (zeroAxis && min < 0) ? this.canvasHeight - 2 : this.canvasHeight - 1;

                if (min < xaxisOffset) {
                    yMaxCalc = (stacked && max >= 0) ? stackMax : max;
                    yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
                    if (yoffset !== Math.ceil(yoffset)) {
                        this.canvasHeightEf -= 2;
                        yoffset = Math.ceil(yoffset);
                    }
                } else {
                    yoffset = this.canvasHeight;
                }
                this.yoffset = yoffset;

                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }

                this.range = range;
            },

            getRegion: function (el, x, y) {
                var result = Math.floor(x / this.totalBarWidth);
                return (result < 0 || result >= this.values.length) ? undefined : result;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion,
                    values = ensureArray(this.values[currentRegion]),
                    result = [],
                    value, i;
                for (i = values.length; i--;) {
                    value = values[i];
                    result.push({
                        isNull: value === null,
                        value: value,
                        color: this.calcColor(i, value, currentRegion),
                        offset: currentRegion
                    });
                }
                return result;
            },

            calcColor: function (stacknum, value, valuenum) {
                var colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    options = this.options,
                    color, newColor;
                if (this.stacked) {
                    color = options.get('stackedBarColor');
                } else {
                    color = (value < 0) ? options.get('negBarColor') : options.get('barColor');
                }
                if (value === 0 && options.get('zeroColor') !== undefined) {
                    color = options.get('zeroColor');
                }
                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                }
                return $.isArray(color) ? color[stacknum % color.length] : color;
            },

            /**
             * Render bar(s) for a region
             */
            renderRegion: function (valuenum, highlight) {
                var vals = this.values[valuenum],
                    options = this.options,
                    xaxisOffset = this.xaxisOffset,
                    result = [],
                    range = this.range,
                    stacked = this.stacked,
                    target = this.target,
                    x = valuenum * this.totalBarWidth,
                    canvasHeightEf = this.canvasHeightEf,
                    yoffset = this.yoffset,
                    y, height, color, isNull, yoffsetNeg, i, valcount, val, minPlotted, allMin;

                vals = $.isArray(vals) ? vals : [vals];
                valcount = vals.length;
                val = vals[0];
                isNull = all(null, vals);
                allMin = all(xaxisOffset, vals, true);

                if (isNull) {
                    if (options.get('nullColor')) {
                        color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
                        y = (yoffset > 0) ? yoffset - 1 : yoffset;
                        return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
                    } else {
                        return undefined;
                    }
                }
                yoffsetNeg = yoffset;
                for (i = 0; i < valcount; i++) {
                    val = vals[i];

                    if (stacked && val === xaxisOffset) {
                        if (!allMin || minPlotted) {
                            continue;
                        }
                        minPlotted = true;
                    }

                    if (range > 0) {
                        height = Math.floor(canvasHeightEf * ((Math.abs(val - xaxisOffset) / range))) + 1;
                    } else {
                        height = 1;
                    }
                    if (val < xaxisOffset || (val === xaxisOffset && yoffset === 0)) {
                        y = yoffsetNeg;
                        yoffsetNeg += height;
                    } else {
                        y = yoffset - height;
                        yoffset -= height;
                    }
                    color = this.calcColor(i, val, valuenum);
                    if (highlight) {
                        color = this.calcHighlightColor(color, options);
                    }
                    result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
                }
                if (result.length === 1) {
                    return result[0];
                }
                return result;
            }
        });

        /**
         * Tristate charts
         */
        $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'tristate',

            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10);
                tristate._super.init.call(this, el, values, options, width, height);

                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.values = $.map(values, Number);
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                return Math.floor(x / this.totalBarWidth);
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    color: this.calcColor(this.values[currentRegion], currentRegion),
                    offset: currentRegion
                };
            },

            calcColor: function (value, valuenum) {
                var values = this.values,
                    options = this.options,
                    colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    color, newColor;

                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                } else if (values[valuenum] < 0) {
                    color = options.get('negBarColor');
                } else if (values[valuenum] > 0) {
                    color = options.get('posBarColor');
                } else {
                    color = options.get('zeroBarColor');
                }
                return color;
            },

            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    target = this.target,
                    canvasHeight, height, halfHeight,
                    x, y, color;

                canvasHeight = target.pixelHeight;
                halfHeight = Math.round(canvasHeight / 2);

                x = valuenum * this.totalBarWidth;
                if (values[valuenum] < 0) {
                    y = halfHeight;
                    height = halfHeight - 1;
                } else if (values[valuenum] > 0) {
                    y = 0;
                    height = halfHeight - 1;
                } else {
                    y = halfHeight - 1;
                    height = 2;
                }
                color = this.calcColor(values[valuenum], valuenum);
                if (color === null) {
                    return;
                }
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
            }
        });

        /**
         * Discrete charts
         */
        $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'discrete',

            init: function (el, values, options, width, height) {
                discrete._super.init.call(this, el, values, options, width, height);

                this.regionShapes = {};
                this.values = values = $.map(values, Number);
                this.min = Math.min.apply(Math, values);
                this.max = Math.max.apply(Math, values);
                this.range = this.max - this.min;
                this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
                this.interval = Math.floor(width / values.length);
                this.itemWidth = width / values.length;
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
                    this.min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
                    this.max = options.get('chartRangeMax');
                }
                this.initTarget();
                if (this.target) {
                    this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
                }
            },

            getRegion: function (el, x, y) {
                return Math.floor(x / this.itemWidth);
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    offset: currentRegion
                };
            },

            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    min = this.min,
                    max = this.max,
                    range = this.range,
                    interval = this.interval,
                    target = this.target,
                    canvasHeight = this.canvasHeight,
                    lineHeight = this.lineHeight,
                    pheight = canvasHeight - lineHeight,
                    ytop, val, color, x;

                val = clipval(values[valuenum], min, max);
                x = valuenum * interval;
                ytop = Math.round(pheight - pheight * ((val - min) / range));
                color = (options.get('thresholdColor') && val < options.get('thresholdValue')) ? options.get('thresholdColor') : options.get('lineColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawLine(x, ytop, x, ytop + lineHeight, color);
            }
        });

        /**
         * Bullet charts
         */
        $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
            type: 'bullet',

            init: function (el, values, options, width, height) {
                var min, max, vals;
                bullet._super.init.call(this, el, values, options, width, height);

                // values: target, performance, range1, range2, range3
                this.values = values = normalizeValues(values);
                // target or performance could be null
                vals = values.slice();
                vals[0] = vals[0] === null ? vals[2] : vals[0];
                vals[1] = values[1] === null ? vals[2] : vals[1];
                min = Math.min.apply(Math, values);
                max = Math.max.apply(Math, values);
                if (options.get('base') === undefined) {
                    min = min < 0 ? min : 0;
                } else {
                    min = options.get('base');
                }
                this.min = min;
                this.max = max;
                this.range = max - min;
                this.shapes = {};
                this.valueShapes = {};
                this.regiondata = {};
                this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
                this.target = this.$el.simpledraw(width, height, options.get('composite'));
                if (!values.length) {
                    this.disabled = true;
                }
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    fieldkey: currentRegion.substr(0, 1),
                    value: this.values[currentRegion.substr(1)],
                    region: currentRegion
                };
            },

            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    shapeid = this.valueShapes[currentRegion],
                    shape;
                delete this.shapes[shapeid];
                switch (currentRegion.substr(0, 1)) {
                    case 'r':
                        shape = this.renderRange(currentRegion.substr(1), highlight);
                        break;
                    case 'p':
                        shape = this.renderPerformance(highlight);
                        break;
                    case 't':
                        shape = this.renderTarget(highlight);
                        break;
                }
                this.valueShapes[currentRegion] = shape.id;
                this.shapes[shape.id] = currentRegion;
                this.target.replaceWithShape(shapeid, shape);
            },

            renderRange: function (rn, highlight) {
                var rangeval = this.values[rn],
                    rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
                    color = this.options.get('rangeColors')[rn - 2];
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
            },

            renderPerformance: function (highlight) {
                var perfval = this.values[1],
                    perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
                    color = this.options.get('performanceColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1,
                    Math.round(this.canvasHeight * 0.4) - 1, color, color);
            },

            renderTarget: function (highlight) {
                var targetval = this.values[0],
                    x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - (this.options.get('targetWidth') / 2)),
                    targettop = Math.round(this.canvasHeight * 0.10),
                    targetheight = this.canvasHeight - (targettop * 2),
                    color = this.options.get('targetColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
            },

            render: function () {
                var vlen = this.values.length,
                    target = this.target,
                    i, shape;
                if (!bullet._super.render.call(this)) {
                    return;
                }
                for (i = 2; i < vlen; i++) {
                    shape = this.renderRange(i).append();
                    this.shapes[shape.id] = 'r' + i;
                    this.valueShapes['r' + i] = shape.id;
                }
                if (this.values[1] !== null) {
                    shape = this.renderPerformance().append();
                    this.shapes[shape.id] = 'p1';
                    this.valueShapes.p1 = shape.id;
                }
                if (this.values[0] !== null) {
                    shape = this.renderTarget().append();
                    this.shapes[shape.id] = 't0';
                    this.valueShapes.t0 = shape.id;
                }
                target.render();
            }
        });

        /**
         * Pie charts
         */
        $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
            type: 'pie',

            init: function (el, values, options, width, height) {
                var total = 0, i;

                pie._super.init.call(this, el, values, options, width, height);

                this.shapes = {}; // map shape ids to value offsets
                this.valueShapes = {}; // maps value offsets to shape ids
                this.values = values = $.map(values, Number);

                if (options.get('width') === 'auto') {
                    this.width = this.height;
                }

                if (values.length > 0) {
                    for (i = values.length; i--;) {
                        total += values[i];
                    }
                }
                this.total = total;
                this.initTarget();
                this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
            },

            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    percent: this.values[currentRegion] / this.total * 100,
                    color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
                    offset: currentRegion
                };
            },

            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    newslice = this.renderSlice(currentRegion, highlight),
                    shapeid = this.valueShapes[currentRegion];
                delete this.shapes[shapeid];
                this.target.replaceWithShape(shapeid, newslice);
                this.valueShapes[currentRegion] = newslice.id;
                this.shapes[newslice.id] = currentRegion;
            },

            renderSlice: function (valuenum, highlight) {
                var target = this.target,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    offset = options.get('offset'),
                    circle = 2 * Math.PI,
                    values = this.values,
                    total = this.total,
                    next = offset ? (2*Math.PI)*(offset/360) : 0,
                    start, end, i, vlen, color;

                vlen = values.length;
                for (i = 0; i < vlen; i++) {
                    start = next;
                    end = next;
                    if (total > 0) {  // avoid divide by zero
                        end = next + (circle * (values[i] / total));
                    }
                    if (valuenum === i) {
                        color = options.get('sliceColors')[i % options.get('sliceColors').length];
                        if (highlight) {
                            color = this.calcHighlightColor(color, options);
                        }

                        return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
                    }
                    next = end;
                }
            },

            render: function () {
                var target = this.target,
                    values = this.values,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    shape, i;

                if (!pie._super.render.call(this)) {
                    return;
                }
                if (borderWidth) {
                    target.drawCircle(radius, radius, Math.floor(radius - (borderWidth / 2)),
                        options.get('borderColor'), undefined, borderWidth).append();
                }
                for (i = values.length; i--;) {
                    if (values[i]) { // don't render zero values
                        shape = this.renderSlice(i).append();
                        this.valueShapes[i] = shape.id; // store just the shapeid
                        this.shapes[shape.id] = i;
                    }
                }
                target.render();
            }
        });

        /**
         * Box plots
         */
        $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
            type: 'box',

            init: function (el, values, options, width, height) {
                box._super.init.call(this, el, values, options, width, height);
                this.values = $.map(values, Number);
                this.width = options.get('width') === 'auto' ? '4.0em' : width;
                this.initTarget();
                if (!this.values.length) {
                    this.disabled = 1;
                }
            },

            /**
             * Simulate a single region
             */
            getRegion: function () {
                return 1;
            },

            getCurrentRegionFields: function () {
                var result = [
                    { field: 'lq', value: this.quartiles[0] },
                    { field: 'med', value: this.quartiles[1] },
                    { field: 'uq', value: this.quartiles[2] }
                ];
                if (this.loutlier !== undefined) {
                    result.push({ field: 'lo', value: this.loutlier});
                }
                if (this.routlier !== undefined) {
                    result.push({ field: 'ro', value: this.routlier});
                }
                if (this.lwhisker !== undefined) {
                    result.push({ field: 'lw', value: this.lwhisker});
                }
                if (this.rwhisker !== undefined) {
                    result.push({ field: 'rw', value: this.rwhisker});
                }
                return result;
            },

            render: function () {
                var target = this.target,
                    values = this.values,
                    vlen = values.length,
                    options = this.options,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
                    maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
                    canvasLeft = 0,
                    lwhisker, loutlier, iqr, q1, q2, q3, rwhisker, routlier, i,
                    size, unitSize;

                if (!box._super.render.call(this)) {
                    return;
                }

                if (options.get('raw')) {
                    if (options.get('showOutliers') && values.length > 5) {
                        loutlier = values[0];
                        lwhisker = values[1];
                        q1 = values[2];
                        q2 = values[3];
                        q3 = values[4];
                        rwhisker = values[5];
                        routlier = values[6];
                    } else {
                        lwhisker = values[0];
                        q1 = values[1];
                        q2 = values[2];
                        q3 = values[3];
                        rwhisker = values[4];
                    }
                } else {
                    values.sort(function (a, b) { return a - b; });
                    q1 = quartile(values, 1);
                    q2 = quartile(values, 2);
                    q3 = quartile(values, 3);
                    iqr = q3 - q1;
                    if (options.get('showOutliers')) {
                        lwhisker = rwhisker = undefined;
                        for (i = 0; i < vlen; i++) {
                            if (lwhisker === undefined && values[i] > q1 - (iqr * options.get('outlierIQR'))) {
                                lwhisker = values[i];
                            }
                            if (values[i] < q3 + (iqr * options.get('outlierIQR'))) {
                                rwhisker = values[i];
                            }
                        }
                        loutlier = values[0];
                        routlier = values[vlen - 1];
                    } else {
                        lwhisker = values[0];
                        rwhisker = values[vlen - 1];
                    }
                }
                this.quartiles = [q1, q2, q3];
                this.lwhisker = lwhisker;
                this.rwhisker = rwhisker;
                this.loutlier = loutlier;
                this.routlier = routlier;

                unitSize = canvasWidth / (maxValue - minValue + 1);
                if (options.get('showOutliers')) {
                    canvasLeft = Math.ceil(options.get('spotRadius'));
                    canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
                    unitSize = canvasWidth / (maxValue - minValue + 1);
                    if (loutlier < lwhisker) {
                        target.drawCircle((loutlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                    if (routlier > rwhisker) {
                        target.drawCircle((routlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                }

                // box
                target.drawRect(
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q3 - q1) * unitSize),
                    Math.round(canvasHeight * 0.8),
                    options.get('boxLineColor'),
                    options.get('boxFillColor')).append();
                // left whisker
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // right whisker
                target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q3 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // median line
                target.drawLine(
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.9),
                    options.get('medianColor')).append();
                if (options.get('target')) {
                    size = Math.ceil(options.get('spotRadius'));
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) - size),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) + size),
                        options.get('targetColor')).append();
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size),
                        Math.round(canvasHeight / 2),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size),
                        Math.round(canvasHeight / 2),
                        options.get('targetColor')).append();
                }
                target.render();
            }
        });

        // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
        // This is accessible as $(foo).simpledraw()

        VShape = createClass({
            init: function (target, id, type, args) {
                this.target = target;
                this.id = id;
                this.type = type;
                this.args = args;
            },
            append: function () {
                this.target.appendShape(this);
                return this;
            }
        });

        VCanvas_base = createClass({
            _pxregex: /(\d+)(px)?\s*$/i,

            init: function (width, height, target) {
                if (!width) {
                    return;
                }
                this.width = width;
                this.height = height;
                this.target = target;
                this.lastShapeId = null;
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
            },

            drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
                return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
            },

            drawShape: function (path, lineColor, fillColor, lineWidth) {
                return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
            },

            drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
                return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
            },

            drawPieSlice: function (x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
            },

            drawRect: function (x, y, width, height, lineColor, fillColor) {
                return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
            },

            getElement: function () {
                return this.canvas;
            },

            /**
             * Return the most recently inserted shape id
             */
            getLastShapeId: function () {
                return this.lastShapeId;
            },

            /**
             * Clear and reset the canvas
             */
            reset: function () {
                alert('reset not implemented');
            },

            _insert: function (el, target) {
                $(target).html(el);
            },

            /**
             * Calculate the pixel dimensions of the canvas
             */
            _calculatePixelDims: function (width, height, canvas) {
                // XXX This should probably be a configurable option
                var match;
                match = this._pxregex.exec(height);
                if (match) {
                    this.pixelHeight = match[1];
                } else {
                    this.pixelHeight = $(canvas).height();
                }
                match = this._pxregex.exec(width);
                if (match) {
                    this.pixelWidth = match[1];
                } else {
                    this.pixelWidth = $(canvas).width();
                }
            },

            /**
             * Generate a shape object and id for later rendering
             */
            _genShape: function (shapetype, shapeargs) {
                var id = shapeCount++;
                shapeargs.unshift(id);
                return new VShape(this, id, shapetype, shapeargs);
            },

            /**
             * Add a shape to the end of the render queue
             */
            appendShape: function (shape) {
                alert('appendShape not implemented');
            },

            /**
             * Replace one shape with another
             */
            replaceWithShape: function (shapeid, shape) {
                alert('replaceWithShape not implemented');
            },

            /**
             * Insert one shape after another in the render queue
             */
            insertAfterShape: function (shapeid, shape) {
                alert('insertAfterShape not implemented');
            },

            /**
             * Remove a shape from the queue
             */
            removeShapeId: function (shapeid) {
                alert('removeShapeId not implemented');
            },

            /**
             * Find a shape at the specified x/y co-ordinates
             */
            getShapeAt: function (el, x, y) {
                alert('getShapeAt not implemented');
            },

            /**
             * Render all queued shapes onto the canvas
             */
            render: function () {
                alert('render not implemented');
            }
        });

        VCanvas_canvas = createClass(VCanvas_base, {
            init: function (width, height, target, interact) {
                VCanvas_canvas._super.init.call(this, width, height, target);
                this.canvas = document.createElement('canvas');
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                $(this.canvas).css({ display: 'inline-block', width: width, height: height, verticalAlign: 'top' });
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                this.interact = interact;
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
                $(this.canvas).css({width: this.pixelWidth, height: this.pixelHeight});
            },

            _getContext: function (lineColor, fillColor, lineWidth) {
                var context = this.canvas.getContext('2d');
                if (lineColor !== undefined) {
                    context.strokeStyle = lineColor;
                }
                context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
                if (fillColor !== undefined) {
                    context.fillStyle = fillColor;
                }
                return context;
            },

            reset: function () {
                var context = this._getContext();
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
            },

            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth),
                    i, plen;
                context.beginPath();
                context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
                for (i = 1, plen = path.length; i < plen; i++) {
                    context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },

            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth);
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI, false);
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
            },

            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var context = this._getContext(lineColor, fillColor);
                context.beginPath();
                context.moveTo(x, y);
                context.arc(x, y, radius, startAngle, endAngle, false);
                context.lineTo(x, y);
                context.closePath();
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },

            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
            },

            appendShape: function (shape) {
                this.shapes[shape.id] = shape;
                this.shapeseq.push(shape.id);
                this.lastShapeId = shape.id;
                return shape.id;
            },

            replaceWithShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                this.shapes[shape.id] = shape;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] == shapeid) {
                        shapeseq[i] = shape.id;
                    }
                }
                delete this.shapes[shapeid];
            },

            replaceWithShapes: function (shapeids, shapes) {
                var shapeseq = this.shapeseq,
                    shapemap = {},
                    sid, i, first;

                for (i = shapeids.length; i--;) {
                    shapemap[shapeids[i]] = true;
                }
                for (i = shapeseq.length; i--;) {
                    sid = shapeseq[i];
                    if (shapemap[sid]) {
                        shapeseq.splice(i, 1);
                        delete this.shapes[sid];
                        first = i;
                    }
                }
                for (i = shapes.length; i--;) {
                    shapeseq.splice(first, 0, shapes[i].id);
                    this.shapes[shapes[i].id] = shapes[i];
                }

            },

            insertAfterShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i + 1, 0, shape.id);
                        this.shapes[shape.id] = shape;
                        return;
                    }
                }
            },

            removeShapeId: function (shapeid) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i, 1);
                        break;
                    }
                }
                delete this.shapes[shapeid];
            },

            getShapeAt: function (el, x, y) {
                this.targetX = x;
                this.targetY = y;
                this.render();
                return this.currentTargetShapeId;
            },

            render: function () {
                var shapeseq = this.shapeseq,
                    shapes = this.shapes,
                    shapeCount = shapeseq.length,
                    context = this._getContext(),
                    shapeid, shape, i;
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                for (i = 0; i < shapeCount; i++) {
                    shapeid = shapeseq[i];
                    shape = shapes[shapeid];
                    this['_draw' + shape.type].apply(this, shape.args);
                }
                if (!this.interact) {
                    // not interactive so no need to keep the shapes array
                    this.shapes = {};
                    this.shapeseq = [];
                }
            }

        });

        VCanvas_vml = createClass(VCanvas_base, {
            init: function (width, height, target) {
                var groupel;
                VCanvas_vml._super.init.call(this, width, height, target);
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                this.canvas = document.createElement('span');
                $(this.canvas).css({ display: 'inline-block', position: 'relative', overflow: 'hidden', width: width, height: height, margin: '0px', padding: '0px', verticalAlign: 'top'});
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' +
                ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
                this.canvas.insertAdjacentHTML('beforeEnd', groupel);
                this.group = $(this.canvas).children()[0];
                this.rendered = false;
                this.prerender = '';
            },

            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var vpath = [],
                    initial, stroke, fill, closed, vel, plen, i;
                for (i = 0, plen = path.length; i < plen; i++) {
                    vpath[i] = '' + (path[i][0]) + ',' + (path[i][1]);
                }
                initial = vpath.splice(0, 1);
                lineWidth = lineWidth === undefined ? 1 : lineWidth;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                ' id="jqsshape' + shapeid + '" ' +
                stroke +
                fill +
                ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' +
                ' </v:shape>';
                return vel;
            },

            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var stroke, fill, vel;
                x -= radius;
                y -= radius;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:oval ' +
                ' id="jqsshape' + shapeid + '" ' +
                stroke +
                fill +
                ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + (radius * 2) + 'px; height:' + (radius * 2) + 'px"></v:oval>';
                return vel;

            },

            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var vpath, startx, starty, endx, endy, stroke, fill, vel;
                if (startAngle === endAngle) {
                    return '';  // VML seems to have problem when start angle equals end angle.
                }
                if ((endAngle - startAngle) === (2 * Math.PI)) {
                    startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
                    endAngle = (2 * Math.PI);
                }

                startx = x + Math.round(Math.cos(startAngle) * radius);
                starty = y + Math.round(Math.sin(startAngle) * radius);
                endx = x + Math.round(Math.cos(endAngle) * radius);
                endy = y + Math.round(Math.sin(endAngle) * radius);

                if (startx === endx && starty === endy) {
                    if ((endAngle - startAngle) < Math.PI) {
                        // Prevent very small slices from being mistaken as a whole pie
                        return '';
                    }
                    // essentially going to be the entire circle, so ignore startAngle
                    startx = endx = x + radius;
                    starty = endy = y;
                }

                if (startx === endx && starty === endy && (endAngle - startAngle) < Math.PI) {
                    return '';
                }

                vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                ' id="jqsshape' + shapeid + '" ' +
                stroke +
                fill +
                ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' +
                ' </v:shape>';
                return vel;
            },

            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
            },

            reset: function () {
                this.group.innerHTML = '';
            },

            appendShape: function (shape) {
                var vel = this['_draw' + shape.type].apply(this, shape.args);
                if (this.rendered) {
                    this.group.insertAdjacentHTML('beforeEnd', vel);
                } else {
                    this.prerender += vel;
                }
                this.lastShapeId = shape.id;
                return shape.id;
            },

            replaceWithShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                    vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].outerHTML = vel;
            },

            replaceWithShapes: function (shapeids, shapes) {
                // replace the first shapeid with all the new shapes then toast the remaining old shapes
                var existing = $('#jqsshape' + shapeids[0]),
                    replace = '',
                    slen = shapes.length,
                    i;
                for (i = 0; i < slen; i++) {
                    replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
                }
                existing[0].outerHTML = replace;
                for (i = 1; i < shapeids.length; i++) {
                    $('#jqsshape' + shapeids[i]).remove();
                }
            },

            insertAfterShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                    vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].insertAdjacentHTML('afterEnd', vel);
            },

            removeShapeId: function (shapeid) {
                var existing = $('#jqsshape' + shapeid);
                this.group.removeChild(existing[0]);
            },

            getShapeAt: function (el, x, y) {
                var shapeid = el.id.substr(8);
                return shapeid;
            },

            render: function () {
                if (!this.rendered) {
                    // batch the intial render into a single repaint
                    this.group.innerHTML = this.prerender;
                    this.rendered = true;
                }
            }
        });

    }))}(document, Math));
/* Sparklines charts */

$(function() {
    "use strict";

    $('.sparkbar').sparkline('html', {
        type: 'bar',
        disableHiddenCheck: false,
        width: '36px',
        height: '36px'
    });

});

/* Sparklines */

$(function() {
    "use strict";
    $('.bar-sparkline-btn').sparkline([
        [3, 5],
        [4, 7],
        [2, 5],
        [3, 5],
        [4, 7],
        [4, 7],
        [5, 7],
        [2, 7],
        [3, 5]
    ], {
        type: 'bar',
        height: '53px',
        barWidth: '5px',
        barSpacing: '2px'
    });
});

$(function() {
    "use strict";
    $('.bar-sparkline-btn-2').sparkline([
        [3, 5],
        [4, 7],
        [2, 5],
        [3, 5],
        [4, 7],
        [4, 7],
        [5, 7],
        [2, 7],
        [3, 5]
    ], {
        type: 'bar',
        height: '40px',
        barWidth: '3px',
        barSpacing: '2px'
    });
});

$(function() {
    "use strict";
    $('.bar-sparkline').sparkline([
        [4, 8],
        [2, 7],
        [2, 6],
        [2, 7],
        [3, 5],
        [2, 7],
        [2, 6],
        [2, 7],
        [3, 5],
        [4, 7],
        [2, 5],
        [3, 5],
        [4, 7],
        [4, 7],
        [5, 7],
        [4, 8],
        [2, 7],
        [2, 6],
        [2, 7],
        [3, 5]
    ], {
        type: 'bar',
        height: '35px',
        barWidth: '5px',
        barSpacing: '2px'
    });
});

$(function() {
    "use strict";
    $('.bar-sparkline-2').sparkline('html', {
        type: 'bar',
        barColor: 'black',
        height: '35px',
        barWidth: '5px',
        barSpacing: '2px'
    });
});

$(function() {
    "use strict";
    $('.tristate-sparkline').sparkline('html', {
        type: 'tristate',
        barColor: 'black',
        height: '35px',
        barWidth: '5px',
        barSpacing: '2px'
    });
});

$(function() {
    "use strict";
    $('.discrete-sparkline').sparkline('html', {
        type: 'discrete',
        barColor: 'black',
        height: '45px',
        barSpacing: '4px'
    });
});

$(function() {
    "use strict";
    $('.pie-sparkline').sparkline('html', {
        type: 'pie',
        barColor: 'black',
        height: '45px',
        width: '45px'
    });
});

$(function() {
    "use strict";

    $(".pie-sparkline-alt").sparkline('html', {
        type: 'pie',
        width: '100',
        height: '100',
        sliceColors: ['#EFEFEF', '#5BCCF6', '#FA7753'],
        borderWidth: 0
    });

});

$(function() {
    "use strict";
    var myvalues = [10, 8, 5, 7, 4, 4, 1];
    $('.dynamic-sparkline').sparkline(myvalues, {
        height: '35px',
        width: '135px'
    });
});

$(function() {
    "use strict";
    var myvalues = [10, 8, 5, 7, 4, 4, 1];
    $('.dynamic-sparkline-5').sparkline(myvalues, {
        height: '57px',
        width: '100px'
    });
});


$(function() {
    "use strict";
    $('.tristate-sparkline-2').sparkline('html', {
        type: 'tristate',
        posBarColor: '#ec6a00',
        negBarColor: '#ffc98a',
        zeroBarColor: '#000000',
        height: '35px',
        barWidth: '5px',
        barSpacing: '2px'
    });
});


$(function() {
    "use strict";
    $(".infobox-sparkline").sparkline([
        [3, 5],
        [4, 7],
        [2, 5],
        [3, 5],
        [4, 7],
        [4, 7],
        [5, 7],
        [2, 7],
        [3, 5]
    ], {
        type: 'bar',
        height: '53',
        barWidth: 5,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#ccc',
        negBarColor: '#ddd',
        zeroColor: '#ccc',
        stackedBarColor: ['#871010', '#ffebeb']
    });

});

$(function() {
    "use strict";
    $(".infobox-sparkline-2").sparkline([
        [3, 5],
        [4, 7],
        [2, 5],
        [3, 5],
        [4, 7],
        [4, 7],
        [5, 7],
        [2, 7],
        [3, 5]
    ], {
        type: 'bar',
        height: '53',
        barWidth: 5,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#ccc',
        negBarColor: '#ddd',
        zeroColor: '#ccc',
        stackedBarColor: ['#000000', '#cccccc']
    });

});

$(function() {
    "use strict";
    $(".infobox-sparkline-pie").sparkline([1.5, 2.5, 2], {
        type: 'pie',
        width: '57',
        height: '57',
        sliceColors: ['#0d4f26', '#00712b', '#2eee76'],
        offset: 0,
        borderWidth: 0,
        borderColor: '#000000'
    });

});

$(function() {
    "use strict";

    $(".infobox-sparkline-tri").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 2, 1], {
        type: 'tristate',
        height: '53',
        posBarColor: '#1bb1fc',
        negBarColor: '#3d57ed',
        zeroBarColor: '#000000',
        barWidth: 5
    });

});


$(function() {
    "use strict";
    $(".sprk-1").sparkline('html', {
        type: 'line',
        width: '50%',
        height: '65',
        lineColor: '#b2b2b2',
        fillColor: '#ffffff',
        lineWidth: 1,
        spotColor: '#0065ff',
        minSpotColor: '#0065ff',
        maxSpotColor: '#0065ff',
        spotRadius: 4
    });

});

$(function() {
    "use strict";

    $(".sparkline-big").sparkline('html', {
        type: 'line',
        width: '85%',
        height: '80',
        highlightLineColor: '#ffffff',
        lineColor: '#ffffff',
        fillColor: 'transparent',
        lineWidth: 1,
        spotColor: '#ffffff',
        minSpotColor: '#ffffff',
        maxSpotColor: '#ffffff',
        highlightSpotColor: '#000000',
        spotRadius: 4
    });

});

$(function() {
    "use strict";

    $(".sparkline-big-alt").sparkline('html', {
        type: 'line',
        width: '90%',
        height: '110',
        highlightLineColor: '#accfff',
        lineColor: 'rgba(0,0,0,0.1)',
        fillColor: '#fcfeff',
        lineWidth: 1,
        spotColor: 'transparent',
        minSpotColor: 'transparent',
        maxSpotColor: 'transparent',
        highlightSpotColor: '#65a6ff',
        spotRadius: 6
    });

});

$(function() {
    "use strict";

    $(".sparkline-bar-big").sparkline('html', {
        type: 'bar',
        width: '85%',
        height: '90',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#ffffff',
        negBarColor: '#ffffff'
    });

});

$(function() {
    "use strict";

    $(".sparkline-bar-big-color").sparkline('html', {
        type: 'bar',
        height: '90',
        width: '85%',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#9CD159',
        negBarColor: '#9CD159'
    });

});

$(function() {
    "use strict";

    $(".sparkline-bar-big-color-2").sparkline([405, 450, 302, 405, 230, 311, 405, 342, 579, 405, 450, 302, 183, 579, 180, 311, 405, 342, 579, 405, 450, 302, 405, 230, 311, 405, 342, 579, 405, 450, 302, 405, 342, 432, 405, 450, 302, 183, 579, 180, 311, 405, 342, 579, 183, 579, 180, 311, 405, 342, 579, 405, 450, 302, 405, 230, 311, 405, 342, 579, 405, 450, 302, 405, 342, 432, 405, 450, 302, 183, 579, 180, 311, 405, 342, 579, 240, 180, 311, 450, 302, 370, 210], {
        type: 'bar',
        height: '88',
        width: '85%',
        barWidth: 6,
        barSpacing: 2,
        zeroAxis: false,
        barColor: '#9CD159',
        negBarColor: '#9CD159'
    });

});

/* Javascript plotting library for jQuery, version 0.8.3.

 Copyright (c) 2007-2014 IOLA and Ole Laursen.
 Licensed under the MIT license.

 */

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

    // Cache the prototype hasOwnProperty for faster access

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

    ///////////////////////////////////////////////////////////////////////////
    // The Canvas object is a wrapper around an HTML5 <canvas> tag.
    //
    // @constructor
    // @param {string} cls List of classes to apply to the canvas.
    // @param {element} container Element onto which to append the canvas.
    //
    // Requiring a container is a little iffy, but unfortunately canvas
    // operations don't work unless the canvas is attached to the DOM.

    function Canvas(cls, container) {

        var element = container.children("." + cls)[0];

        if (element == null) {

            element = document.createElement("canvas");
            element.className = cls;

            $(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
                .appendTo(container);

            // If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

            if (!element.getContext) {
                if (window.G_vmlCanvasManager) {
                    element = window.G_vmlCanvasManager.initElement(element);
                } else {
                    throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                }
            }
        }

        this.element = element;

        var context = this.context = element.getContext("2d");

        // Determine the screen's ratio of physical to device-independent
        // pixels.  This is the ratio between the canvas width that the browser
        // advertises and the number of pixels actually present in that space.

        // The iPhone 4, for example, has a device-independent width of 320px,
        // but its screen is actually 640px wide.  It therefore has a pixel
        // ratio of 2, while most normal devices have a ratio of 1.

        var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio =
                context.webkitBackingStorePixelRatio ||
                context.mozBackingStorePixelRatio ||
                context.msBackingStorePixelRatio ||
                context.oBackingStorePixelRatio ||
                context.backingStorePixelRatio || 1;

        this.pixelRatio = devicePixelRatio / backingStoreRatio;

        // Size the canvas to match the internal dimensions of its container

        this.resize(container.width(), container.height());

        // Collection of HTML div layers for text overlaid onto the canvas

        this.textContainer = null;
        this.text = {};

        // Cache of text fragments and metrics, so we can avoid expensively
        // re-calculating them when the plot is re-rendered in a loop.

        this._textCache = {};
    }

    // Resizes the canvas to the given dimensions.
    //
    // @param {number} width New width of the canvas, in pixels.
    // @param {number} width New height of the canvas, in pixels.

    Canvas.prototype.resize = function(width, height) {

        if (width <= 0 || height <= 0) {
            throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
        }

        var element = this.element,
            context = this.context,
            pixelRatio = this.pixelRatio;

        // Resize the canvas, increasing its density based on the display's
        // pixel ratio; basically giving it more pixels without increasing the
        // size of its element, to take advantage of the fact that retina
        // displays have that many more pixels in the same advertised space.

        // Resizing should reset the state (excanvas seems to be buggy though)

        if (this.width != width) {
            element.width = width * pixelRatio;
            element.style.width = width + "px";
            this.width = width;
        }

        if (this.height != height) {
            element.height = height * pixelRatio;
            element.style.height = height + "px";
            this.height = height;
        }

        // Save the context, so we can reset in case we get replotted.  The
        // restore ensure that we're really back at the initial state, and
        // should be safe even if we haven't saved the initial state yet.

        context.restore();
        context.save();

        // Scale the coordinate space to match the display density; so even though we
        // may have twice as many pixels, we still want lines and other drawing to
        // appear at the same size; the extra pixels will just make them crisper.

        context.scale(pixelRatio, pixelRatio);
    };

    // Clears the entire canvas area, not including any overlaid HTML text

    Canvas.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height);
    };

    // Finishes rendering the canvas, including managing the text overlay.

    Canvas.prototype.render = function() {

        var cache = this._textCache;

        // For each text layer, add elements marked as active that haven't
        // already been rendered, and remove those that are no longer active.

        for (var layerKey in cache) {
            if (hasOwnProperty.call(cache, layerKey)) {

                var layer = this.getTextLayer(layerKey),
                    layerCache = cache[layerKey];

                layer.hide();

                for (var styleKey in layerCache) {
                    if (hasOwnProperty.call(layerCache, styleKey)) {
                        var styleCache = layerCache[styleKey];
                        for (var key in styleCache) {
                            if (hasOwnProperty.call(styleCache, key)) {

                                var positions = styleCache[key].positions;

                                for (var i = 0, position; position = positions[i]; i++) {
                                    if (position.active) {
                                        if (!position.rendered) {
                                            layer.append(position.element);
                                            position.rendered = true;
                                        }
                                    } else {
                                        positions.splice(i--, 1);
                                        if (position.rendered) {
                                            position.element.detach();
                                        }
                                    }
                                }

                                if (positions.length == 0) {
                                    delete styleCache[key];
                                }
                            }
                        }
                    }
                }

                layer.show();
            }
        }
    };

    // Creates (if necessary) and returns the text overlay container.
    //
    // @param {string} classes String of space-separated CSS classes used to
    //     uniquely identify the text layer.
    // @return {object} The jQuery-wrapped text-layer div.

    Canvas.prototype.getTextLayer = function(classes) {

        var layer = this.text[classes];

        // Create the text layer if it doesn't exist

        if (layer == null) {

            // Create the text layer container, if it doesn't exist

            if (this.textContainer == null) {
                this.textContainer = $("<div class='flot-text'></div>")
                    .css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        'font-size': "smaller",
                        color: "#545454"
                    })
                    .insertAfter(this.element);
            }

            layer = this.text[classes] = $("<div></div>")
                .addClass(classes)
                .css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                })
                .appendTo(this.textContainer);
        }

        return layer;
    };

    // Creates (if necessary) and returns a text info object.
    //
    // The object looks like this:
    //
    // {
    //     width: Width of the text's wrapper div.
    //     height: Height of the text's wrapper div.
    //     element: The jQuery-wrapped HTML div containing the text.
    //     positions: Array of positions at which this text is drawn.
    // }
    //
    // The positions array contains objects that look like this:
    //
    // {
    //     active: Flag indicating whether the text should be visible.
    //     rendered: Flag indicating whether the text is currently visible.
    //     element: The jQuery-wrapped HTML div containing the text.
    //     x: X coordinate at which to draw the text.
    //     y: Y coordinate at which to draw the text.
    // }
    //
    // Each position after the first receives a clone of the original element.
    //
    // The idea is that that the width, height, and general 'identity' of the
    // text is constant no matter where it is placed; the placements are a
    // secondary property.
    //
    // Canvas maintains a cache of recently-used text info objects; getTextInfo
    // either returns the cached element or creates a new entry.
    //
    // @param {string} layer A string of space-separated CSS classes uniquely
    //     identifying the layer containing this text.
    // @param {string} text Text string to retrieve info for.
    // @param {(string|object)=} font Either a string of space-separated CSS
    //     classes or a font-spec object, defining the text's font and style.
    // @param {number=} angle Angle at which to rotate the text, in degrees.
    //     Angle is currently unused, it will be implemented in the future.
    // @param {number=} width Maximum width of the text before it wraps.
    // @return {object} a text info object.

    Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

        var textStyle, layerCache, styleCache, info;

        // Cast the value to a string, in case we were given a number or such

        text = "" + text;

        // If the font is a font-spec object, generate a CSS font definition

        if (typeof font === "object") {
            textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
        } else {
            textStyle = font;
        }

        // Retrieve (or create) the cache for the text's layer and styles

        layerCache = this._textCache[layer];

        if (layerCache == null) {
            layerCache = this._textCache[layer] = {};
        }

        styleCache = layerCache[textStyle];

        if (styleCache == null) {
            styleCache = layerCache[textStyle] = {};
        }

        info = styleCache[text];

        // If we can't find a matching element in our cache, create a new one

        if (info == null) {

            var element = $("<div></div>").html(text)
                .css({
                    position: "absolute",
                    'max-width': width,
                    top: -9999
                })
                .appendTo(this.getTextLayer(layer));

            if (typeof font === "object") {
                element.css({
                    font: textStyle,
                    color: font.color
                });
            } else if (typeof font === "string") {
                element.addClass(font);
            }

            info = styleCache[text] = {
                width: element.outerWidth(true),
                height: element.outerHeight(true),
                element: element,
                positions: []
            };

            element.detach();
        }

        return info;
    };

    // Adds a text string to the canvas text overlay.
    //
    // The text isn't drawn immediately; it is marked as rendering, which will
    // result in its addition to the canvas on the next render pass.
    //
    // @param {string} layer A string of space-separated CSS classes uniquely
    //     identifying the layer containing this text.
    // @param {number} x X coordinate at which to draw the text.
    // @param {number} y Y coordinate at which to draw the text.
    // @param {string} text Text string to draw.
    // @param {(string|object)=} font Either a string of space-separated CSS
    //     classes or a font-spec object, defining the text's font and style.
    // @param {number=} angle Angle at which to rotate the text, in degrees.
    //     Angle is currently unused, it will be implemented in the future.
    // @param {number=} width Maximum width of the text before it wraps.
    // @param {string=} halign Horizontal alignment of the text; either "left",
    //     "center" or "right".
    // @param {string=} valign Vertical alignment of the text; either "top",
    //     "middle" or "bottom".

    Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

        var info = this.getTextInfo(layer, text, font, angle, width),
            positions = info.positions;

        // Tweak the div's position to match the text's alignment

        if (halign == "center") {
            x -= info.width / 2;
        } else if (halign == "right") {
            x -= info.width;
        }

        if (valign == "middle") {
            y -= info.height / 2;
        } else if (valign == "bottom") {
            y -= info.height;
        }

        // Determine whether this text already exists at this position.
        // If so, mark it for inclusion in the next render pass.

        for (var i = 0, position; position = positions[i]; i++) {
            if (position.x == x && position.y == y) {
                position.active = true;
                return;
            }
        }

        // If the text doesn't exist at this position, create a new entry

        // For the very first position we'll re-use the original element,
        // while for subsequent ones we'll clone it.

        position = {
            active: true,
            rendered: false,
            element: positions.length ? info.element.clone() : info.element,
            x: x,
            y: y
        };

        positions.push(position);

        // Move the element to its final position within the container

        position.element.css({
            top: Math.round(y),
            left: Math.round(x),
            'text-align': halign	// In case the text wraps
        });
    };

    // Removes one or more text strings from the canvas text overlay.
    //
    // If no parameters are given, all text within the layer is removed.
    //
    // Note that the text is not immediately removed; it is simply marked as
    // inactive, which will result in its removal on the next render pass.
    // This avoids the performance penalty for 'clear and redraw' behavior,
    // where we potentially get rid of all text on a layer, but will likely
    // add back most or all of it later, as when redrawing axes, for example.
    //
    // @param {string} layer A string of space-separated CSS classes uniquely
    //     identifying the layer containing this text.
    // @param {number=} x X coordinate of the text.
    // @param {number=} y Y coordinate of the text.
    // @param {string=} text Text string to remove.
    // @param {(string|object)=} font Either a string of space-separated CSS
    //     classes or a font-spec object, defining the text's font and style.
    // @param {number=} angle Angle at which the text is rotated, in degrees.
    //     Angle is currently unused, it will be implemented in the future.

    Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
        if (text == null) {
            var layerCache = this._textCache[layer];
            if (layerCache != null) {
                for (var styleKey in layerCache) {
                    if (hasOwnProperty.call(layerCache, styleKey)) {
                        var styleCache = layerCache[styleKey];
                        for (var key in styleCache) {
                            if (hasOwnProperty.call(styleCache, key)) {
                                var positions = styleCache[key].positions;
                                for (var i = 0, position; position = positions[i]; i++) {
                                    position.active = false;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            var positions = this.getTextInfo(layer, text, font, angle).positions;
            for (var i = 0, position; position = positions[i]; i++) {
                if (position.x == x && position.y == y) {
                    position.active = false;
                }
            }
        }
    };

    ///////////////////////////////////////////////////////////////////////////
    // The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
            surface = null,     // the canvas for the plot itself
            overlay = null,     // canvas for interactive stuff on top of plot
            eventHolder = null, // jQuery object that events should be bound to
            ctx = null, octx = null,
            xaxes = [], yaxes = [],
            plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
            plotWidth = 0, plotHeight = 0,
            hooks = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
            var width = placeholder.width(),
                height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
                options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

            // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
            // heuristic based on the model a*sqrt(x) fitted to
            // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

                axis.tickFormatter = function (value, axis) {

                    var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
                    var formatted = "" + Math.round(value * factor) / factor;

                    // If tickDecimals was specified, ensure that we have exactly that
                    // much precision; otherwise default to the value's own precision.

                    if (axis.tickDecimals != null) {
                        var decimal = formatted.indexOf(".");
                        var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
                        if (precision < axis.tickDecimals) {
                            return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
                        }
                    }

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                            xrange.to - xrange.from,
                            yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                            // skip those lying on the axes if we got a border
                        || (t == "full"
                        && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                        && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                    series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                    series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                getFillStyle(series.points, series.color), 0, false,
                series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                    entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                                (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                                my >= y + barLeft && my <= y + barRight) :
                                (mx >= x + barLeft && mx <= x + barRight &&
                                my >= Math.min(b, y) && my <= Math.max(b, y)))
                            item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                    dataIndex: j,
                    series: series[i],
                    seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                    function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                    function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
                pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                        h.point[0] == item.datapoint[0] &&
                        h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);
/* Flot plugin for automatically redrawing plots as the placeholder resizes.

 Copyright (c) 2007-2014 IOLA and Ole Laursen.
 Licensed under the MIT license.

 It works by listening for changes on the placeholder div (through the jQuery
 resize event plugin) - if the size changes, it will redraw the plot.

 There are no options. If you need to disable the plugin for some plots, you
 can just fix the size of their placeholders.

 */

/* Inline dependency:
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,t){"$:nomunge";var i=[],n=$.resize=$.extend($.resize,{}),a,r=false,s="setTimeout",u="resize",m=u+"-special-event",o="pendingDelay",l="activeDelay",f="throttleWindow";n[o]=200;n[l]=20;n[f]=true;$.event.special[u]={setup:function(){if(!n[f]&&this[s]){return false}var e=$(this);i.push(this);e.data(m,{w:e.width(),h:e.height()});if(i.length===1){a=t;h()}},teardown:function(){if(!n[f]&&this[s]){return false}var e=$(this);for(var t=i.length-1;t>=0;t--){if(i[t]==this){i.splice(t,1);break}}e.removeData(m);if(!i.length){if(r){cancelAnimationFrame(a)}else{clearTimeout(a)}a=null}},add:function(e){if(!n[f]&&this[s]){return false}var i;function a(e,n,a){var r=$(this),s=r.data(m)||{};s.w=n!==t?n:r.width();s.h=a!==t?a:r.height();i.apply(this,arguments)}if($.isFunction(e)){i=e;return a}else{i=e.handler;e.handler=a}}};function h(t){if(r===true){r=t||1}for(var s=i.length-1;s>=0;s--){var l=$(i[s]);if(l[0]==e||l.is(":visible")){var f=l.width(),c=l.height(),d=l.data(m);if(d&&(f!==d.w||c!==d.h)){l.trigger(u,[d.w=f,d.h=c]);r=t||true}}else{d=l.data(m);d.w=0;d.h=0}}if(a!==null){if(r&&(t==null||t-r<1e3)){a=e.requestAnimationFrame(h)}else{a=setTimeout(h,n[o]);r=false}}}if(!e.requestAnimationFrame){e.requestAnimationFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t,i){return e.setTimeout(function(){t((new Date).getTime())},n[l])}}()}if(!e.cancelAnimationFrame){e.cancelAnimationFrame=function(){return e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}()}})(jQuery,this);

(function ($) {
    var options = { }; // no options

    function init(plot) {
        function onResize() {
            var placeholder = plot.getPlaceholder();

            // somebody might have hidden us and we can't plot
            // when we don't have the dimensions
            if (placeholder.width() == 0 || placeholder.height() == 0)
                return;

            plot.resize();
            plot.setupGrid();
            plot.draw();
        }

        function bindEvents(plot, eventHolder) {
            plot.getPlaceholder().resize(onResize);
        }

        function shutdown(plot, eventHolder) {
            plot.getPlaceholder().unbind("resize", onResize);
        }

        plot.hooks.bindEvents.push(bindEvents);
        plot.hooks.shutdown.push(shutdown);
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'resize',
        version: '1.0'
    });
})(jQuery);
/* Flot plugin for stacking data sets rather than overlyaing them.

 Copyright (c) 2007-2014 IOLA and Ole Laursen.
 Licensed under the MIT license.

 The plugin assumes the data is sorted on x (or y if stacking horizontally).
 For line charts, it is assumed that if a line has an undefined gap (from a
 null point), then the line above it should have the same gap - insert zeros
 instead of "null" if you want another behaviour. This also holds for the start
 and end of the chart. Note that stacking a mix of positive and negative values
 in most instances doesn't make sense (so it looks weird).

 Two or more series are stacked when their "stack" attribute is set to the same
 key (which can be any number or string or just "true"). To specify the default
 stack, you can set the stack option like this:

 series: {
 stack: null/false, true, or a key (number/string)
 }

 You can also specify it for a single series, like this:

 $.plot( $("#placeholder"), [{
 data: [ ... ],
 stack: true
 }])

 The stacking order is determined by the order of the data series in the array
 (later series end up on top of the previous).

 Internally, the plugin modifies the datapoints in each series, adding an
 offset to the y value. For line series, extra data points are inserted through
 interpolation. If there's a second y value, it's also adjusted (e.g for bar
 charts or filled areas).

 */

(function ($) {
    var options = {
        series: { stack: null } // or number/string
    };

    function init(plot) {
        function findMatchingSeries(s, allseries) {
            var res = null;
            for (var i = 0; i < allseries.length; ++i) {
                if (s == allseries[i])
                    break;

                if (allseries[i].stack == s.stack)
                    res = allseries[i];
            }

            return res;
        }

        function stackData(plot, s, datapoints) {
            if (s.stack == null || s.stack === false)
                return;

            var other = findMatchingSeries(s, plot.getData());
            if (!other)
                return;

            var ps = datapoints.pointsize,
                points = datapoints.points,
                otherps = other.datapoints.pointsize,
                otherpoints = other.datapoints.points,
                newpoints = [],
                px, py, intery, qx, qy, bottom,
                withlines = s.lines.show,
                horizontal = s.bars.horizontal,
                withbottom = ps > 2 && (horizontal ? datapoints.format[2].x : datapoints.format[2].y),
                withsteps = withlines && s.lines.steps,
                fromgap = true,
                keyOffset = horizontal ? 1 : 0,
                accumulateOffset = horizontal ? 0 : 1,
                i = 0, j = 0, l, m;

            while (true) {
                if (i >= points.length)
                    break;

                l = newpoints.length;

                if (points[i] == null) {
                    // copy gaps
                    for (m = 0; m < ps; ++m)
                        newpoints.push(points[i + m]);
                    i += ps;
                }
                else if (j >= otherpoints.length) {
                    // for lines, we can't use the rest of the points
                    if (!withlines) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);
                    }
                    i += ps;
                }
                else if (otherpoints[j] == null) {
                    // oops, got a gap
                    for (m = 0; m < ps; ++m)
                        newpoints.push(null);
                    fromgap = true;
                    j += otherps;
                }
                else {
                    // cases where we actually got two points
                    px = points[i + keyOffset];
                    py = points[i + accumulateOffset];
                    qx = otherpoints[j + keyOffset];
                    qy = otherpoints[j + accumulateOffset];
                    bottom = 0;

                    if (px == qx) {
                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);

                        newpoints[l + accumulateOffset] += qy;
                        bottom = qy;

                        i += ps;
                        j += otherps;
                    }
                    else if (px > qx) {
                        // we got past point below, might need to
                        // insert interpolated extra point
                        if (withlines && i > 0 && points[i - ps] != null) {
                            intery = py + (points[i - ps + accumulateOffset] - py) * (qx - px) / (points[i - ps + keyOffset] - px);
                            newpoints.push(qx);
                            newpoints.push(intery + qy);
                            for (m = 2; m < ps; ++m)
                                newpoints.push(points[i + m]);
                            bottom = qy;
                        }

                        j += otherps;
                    }
                    else { // px < qx
                        if (fromgap && withlines) {
                            // if we come from a gap, we just skip this point
                            i += ps;
                            continue;
                        }

                        for (m = 0; m < ps; ++m)
                            newpoints.push(points[i + m]);

                        // we might be able to interpolate a point below,
                        // this can give us a better y
                        if (withlines && j > 0 && otherpoints[j - otherps] != null)
                            bottom = qy + (otherpoints[j - otherps + accumulateOffset] - qy) * (px - qx) / (otherpoints[j - otherps + keyOffset] - qx);

                        newpoints[l + accumulateOffset] += bottom;

                        i += ps;
                    }

                    fromgap = false;

                    if (l != newpoints.length && withbottom)
                        newpoints[l + 2] += bottom;
                }

                // maintain the line steps invariant
                if (withsteps && l != newpoints.length && l > 0
                    && newpoints[l] != null
                    && newpoints[l] != newpoints[l - ps]
                    && newpoints[l + 1] != newpoints[l - ps + 1]) {
                    for (m = 0; m < ps; ++m)
                        newpoints[l + ps + m] = newpoints[l + m];
                    newpoints[l + 1] = newpoints[l - ps + 1];
                }
            }

            datapoints.points = newpoints;
        }

        plot.hooks.processDatapoints.push(stackData);
    }

    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'stack',
        version: '1.2'
    });
})(jQuery);
/* Flot plugin for rendering pie charts.

 Copyright (c) 2007-2014 IOLA and Ole Laursen.
 Licensed under the MIT license.

 The plugin assumes that each series has a single data value, and that each
 value is a positive integer or zero.  Negative numbers don't make sense for a
 pie chart, and have unpredictable results.  The values do NOT need to be
 passed in as percentages; the plugin will calculate the total and per-slice
 percentages internally.

 * Created by Brian Medendorp

 * Updated with contributions from btburnett3, Anthony Aragues and Xavi Ivars

 The plugin supports these options:

 series: {
 pie: {
 show: true/false
 radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
 innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
 startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
 tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
 offset: {
 top: integer value to move the pie up or down
 left: integer value to move the pie left or right, or 'auto'
 },
 stroke: {
 color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
 width: integer pixel width of the stroke
 },
 label: {
 show: true/false, or 'auto'
 formatter:  a user-defined function that modifies the text/style of the label text
 radius: 0-1 for percentage of fullsize, or a specified pixel length
 background: {
 color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
 opacity: 0-1
 },
 threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
 },
 combine: {
 threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
 color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
 label: any text value of what the combined slice should be labeled
 }
 highlight: {
 opacity: 0-1
 }
 }
 }

 More detail and specific examples can be found in the included HTML file.

 */

(function($) {

    // Maximum redraw attempts when fitting labels within the plot

    var REDRAW_ATTEMPTS = 10;

    // Factor by which to shrink the pie when fitting labels within the plot

    var REDRAW_SHRINK = 0.95;

    function init(plot) {

        var canvas = null,
            target = null,
            options = null,
            maxRadius = null,
            centerLeft = null,
            centerTop = null,
            processed = false,
            ctx = null;

        // interactive variables

        var highlights = [];

        // add hook to determine if pie plugin in enabled, and then perform necessary operations

        plot.hooks.processOptions.push(function(plot, options) {
            if (options.series.pie.show) {

                options.grid.show = false;

                // set labels.show

                if (options.series.pie.label.show == "auto") {
                    if (options.legend.show) {
                        options.series.pie.label.show = false;
                    } else {
                        options.series.pie.label.show = true;
                    }
                }

                // set radius

                if (options.series.pie.radius == "auto") {
                    if (options.series.pie.label.show) {
                        options.series.pie.radius = 3/4;
                    } else {
                        options.series.pie.radius = 1;
                    }
                }

                // ensure sane tilt

                if (options.series.pie.tilt > 1) {
                    options.series.pie.tilt = 1;
                } else if (options.series.pie.tilt < 0) {
                    options.series.pie.tilt = 0;
                }
            }
        });

        plot.hooks.bindEvents.push(function(plot, eventHolder) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                if (options.grid.hoverable) {
                    eventHolder.unbind("mousemove").mousemove(onMouseMove);
                }
                if (options.grid.clickable) {
                    eventHolder.unbind("click").click(onClick);
                }
            }
        });

        plot.hooks.processDatapoints.push(function(plot, series, data, datapoints) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                processDatapoints(plot, series, data, datapoints);
            }
        });

        plot.hooks.drawOverlay.push(function(plot, octx) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                drawOverlay(plot, octx);
            }
        });

        plot.hooks.draw.push(function(plot, newCtx) {
            var options = plot.getOptions();
            if (options.series.pie.show) {
                draw(plot, newCtx);
            }
        });

        function processDatapoints(plot, series, datapoints) {
            if (!processed)	{
                processed = true;
                canvas = plot.getCanvas();
                target = $(canvas).parent();
                options = plot.getOptions();
                plot.setData(combine(plot.getData()));
            }
        }

        function combine(data) {

            var total = 0,
                combined = 0,
                numCombined = 0,
                color = options.series.pie.combine.color,
                newdata = [];

            // Fix up the raw data from Flot, ensuring the data is numeric

            for (var i = 0; i < data.length; ++i) {

                var value = data[i].data;

                // If the data is an array, we'll assume that it's a standard
                // Flot x-y pair, and are concerned only with the second value.

                // Note how we use the original array, rather than creating a
                // new one; this is more efficient and preserves any extra data
                // that the user may have stored in higher indexes.

                if ($.isArray(value) && value.length == 1) {
                    value = value[0];
                }

                if ($.isArray(value)) {
                    // Equivalent to $.isNumeric() but compatible with jQuery < 1.7
                    if (!isNaN(parseFloat(value[1])) && isFinite(value[1])) {
                        value[1] = +value[1];
                    } else {
                        value[1] = 0;
                    }
                } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
                    value = [1, +value];
                } else {
                    value = [1, 0];
                }

                data[i].data = [value];
            }

            // Sum up all the slices, so we can calculate percentages for each

            for (var i = 0; i < data.length; ++i) {
                total += data[i].data[0][1];
            }

            // Count the number of slices with percentages below the combine
            // threshold; if it turns out to be just one, we won't combine.

            for (var i = 0; i < data.length; ++i) {
                var value = data[i].data[0][1];
                if (value / total <= options.series.pie.combine.threshold) {
                    combined += value;
                    numCombined++;
                    if (!color) {
                        color = data[i].color;
                    }
                }
            }

            for (var i = 0; i < data.length; ++i) {
                var value = data[i].data[0][1];
                if (numCombined < 2 || value / total > options.series.pie.combine.threshold) {
                    newdata.push(
                        $.extend(data[i], {     /* extend to allow keeping all other original data values
                         and using them e.g. in labelFormatter. */
                            data: [[1, value]],
                            color: data[i].color,
                            label: data[i].label,
                            angle: value * Math.PI * 2 / total,
                            percent: value / (total / 100)
                        })
                    );
                }
            }

            if (numCombined > 1) {
                newdata.push({
                    data: [[1, combined]],
                    color: color,
                    label: options.series.pie.combine.label,
                    angle: combined * Math.PI * 2 / total,
                    percent: combined / (total / 100)
                });
            }

            return newdata;
        }

        function draw(plot, newCtx) {

            if (!target) {
                return; // if no series were passed
            }

            var canvasWidth = plot.getPlaceholder().width(),
                canvasHeight = plot.getPlaceholder().height(),
                legendWidth = target.children().filter(".legend").children().width() || 0;

            ctx = newCtx;

            // WARNING: HACK! REWRITE THIS CODE AS SOON AS POSSIBLE!

            // When combining smaller slices into an 'other' slice, we need to
            // add a new series.  Since Flot gives plugins no way to modify the
            // list of series, the pie plugin uses a hack where the first call
            // to processDatapoints results in a call to setData with the new
            // list of series, then subsequent processDatapoints do nothing.

            // The plugin-global 'processed' flag is used to control this hack;
            // it starts out false, and is set to true after the first call to
            // processDatapoints.

            // Unfortunately this turns future setData calls into no-ops; they
            // call processDatapoints, the flag is true, and nothing happens.

            // To fix this we'll set the flag back to false here in draw, when
            // all series have been processed, so the next sequence of calls to
            // processDatapoints once again starts out with a slice-combine.
            // This is really a hack; in 0.9 we need to give plugins a proper
            // way to modify series before any processing begins.

            processed = false;

            // calculate maximum radius and center point

            maxRadius =  Math.min(canvasWidth, canvasHeight / options.series.pie.tilt) / 2;
            centerTop = canvasHeight / 2 + options.series.pie.offset.top;
            centerLeft = canvasWidth / 2;

            if (options.series.pie.offset.left == "auto") {
                if (options.legend.position.match("w")) {
                    centerLeft += legendWidth / 2;
                } else {
                    centerLeft -= legendWidth / 2;
                }
                if (centerLeft < maxRadius) {
                    centerLeft = maxRadius;
                } else if (centerLeft > canvasWidth - maxRadius) {
                    centerLeft = canvasWidth - maxRadius;
                }
            } else {
                centerLeft += options.series.pie.offset.left;
            }

            var slices = plot.getData(),
                attempts = 0;

            // Keep shrinking the pie's radius until drawPie returns true,
            // indicating that all the labels fit, or we try too many times.

            do {
                if (attempts > 0) {
                    maxRadius *= REDRAW_SHRINK;
                }
                attempts += 1;
                clear();
                if (options.series.pie.tilt <= 0.8) {
                    drawShadow();
                }
            } while (!drawPie() && attempts < REDRAW_ATTEMPTS)

            if (attempts >= REDRAW_ATTEMPTS) {
                clear();
                target.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>");
            }

            if (plot.setSeries && plot.insertLegend) {
                plot.setSeries(slices);
                plot.insertLegend();
            }

            // we're actually done at this point, just defining internal functions at this point

            function clear() {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                target.children().filter(".pieLabel, .pieLabelBackground").remove();
            }

            function drawShadow() {

                var shadowLeft = options.series.pie.shadow.left;
                var shadowTop = options.series.pie.shadow.top;
                var edge = 10;
                var alpha = options.series.pie.shadow.alpha;
                var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

                if (radius >= canvasWidth / 2 - shadowLeft || radius * options.series.pie.tilt >= canvasHeight / 2 - shadowTop || radius <= edge) {
                    return;	// shadow would be outside canvas, so don't draw it
                }

                ctx.save();
                ctx.translate(shadowLeft,shadowTop);
                ctx.globalAlpha = alpha;
                ctx.fillStyle = "#000";

                // center and rotate to starting position

                ctx.translate(centerLeft,centerTop);
                ctx.scale(1, options.series.pie.tilt);

                //radius -= edge;

                for (var i = 1; i <= edge; i++) {
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
                    ctx.fill();
                    radius -= i;
                }

                ctx.restore();
            }

            function drawPie() {

                var startAngle = Math.PI * options.series.pie.startAngle;
                var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

                // center and rotate to starting position

                ctx.save();
                ctx.translate(centerLeft,centerTop);
                ctx.scale(1, options.series.pie.tilt);
                //ctx.rotate(startAngle); // start at top; -- This doesn't work properly in Opera

                // draw slices

                ctx.save();
                var currentAngle = startAngle;
                for (var i = 0; i < slices.length; ++i) {
                    slices[i].startAngle = currentAngle;
                    drawSlice(slices[i].angle, slices[i].color, true);
                }
                ctx.restore();

                // draw slice outlines

                if (options.series.pie.stroke.width > 0) {
                    ctx.save();
                    ctx.lineWidth = options.series.pie.stroke.width;
                    currentAngle = startAngle;
                    for (var i = 0; i < slices.length; ++i) {
                        drawSlice(slices[i].angle, options.series.pie.stroke.color, false);
                    }
                    ctx.restore();
                }

                // draw donut hole

                drawDonutHole(ctx);

                ctx.restore();

                // Draw the labels, returning true if they fit within the plot

                if (options.series.pie.label.show) {
                    return drawLabels();
                } else return true;

                function drawSlice(angle, color, fill) {

                    if (angle <= 0 || isNaN(angle)) {
                        return;
                    }

                    if (fill) {
                        ctx.fillStyle = color;
                    } else {
                        ctx.strokeStyle = color;
                        ctx.lineJoin = "round";
                    }

                    ctx.beginPath();
                    if (Math.abs(angle - Math.PI * 2) > 0.000000001) {
                        ctx.moveTo(0, 0); // Center of the pie
                    }

                    //ctx.arc(0, 0, radius, 0, angle, false); // This doesn't work properly in Opera
                    ctx.arc(0, 0, radius,currentAngle, currentAngle + angle / 2, false);
                    ctx.arc(0, 0, radius,currentAngle + angle / 2, currentAngle + angle, false);
                    ctx.closePath();
                    //ctx.rotate(angle); // This doesn't work properly in Opera
                    currentAngle += angle;

                    if (fill) {
                        ctx.fill();
                    } else {
                        ctx.stroke();
                    }
                }

                function drawLabels() {

                    var currentAngle = startAngle;
                    var radius = options.series.pie.label.radius > 1 ? options.series.pie.label.radius : maxRadius * options.series.pie.label.radius;

                    for (var i = 0; i < slices.length; ++i) {
                        if (slices[i].percent >= options.series.pie.label.threshold * 100) {
                            if (!drawLabel(slices[i], currentAngle, i)) {
                                return false;
                            }
                        }
                        currentAngle += slices[i].angle;
                    }

                    return true;

                    function drawLabel(slice, startAngle, index) {

                        if (slice.data[0][1] == 0) {
                            return true;
                        }

                        // format label text

                        var lf = options.legend.labelFormatter, text, plf = options.series.pie.label.formatter;

                        if (lf) {
                            text = lf(slice.label, slice);
                        } else {
                            text = slice.label;
                        }

                        if (plf) {
                            text = plf(text, slice);
                        }

                        var halfAngle = ((startAngle + slice.angle) + startAngle) / 2;
                        var x = centerLeft + Math.round(Math.cos(halfAngle) * radius);
                        var y = centerTop + Math.round(Math.sin(halfAngle) * radius) * options.series.pie.tilt;

                        var html = "<span class='pieLabel' id='pieLabel" + index + "' style='position:absolute;top:" + y + "px;left:" + x + "px;'>" + text + "</span>";
                        target.append(html);

                        var label = target.children("#pieLabel" + index);
                        var labelTop = (y - label.height() / 2);
                        var labelLeft = (x - label.width() / 2);

                        label.css("top", labelTop);
                        label.css("left", labelLeft);

                        // check to make sure that the label is not outside the canvas

                        if (0 - labelTop > 0 || 0 - labelLeft > 0 || canvasHeight - (labelTop + label.height()) < 0 || canvasWidth - (labelLeft + label.width()) < 0) {
                            return false;
                        }

                        if (options.series.pie.label.background.opacity != 0) {

                            // put in the transparent background separately to avoid blended labels and label boxes

                            var c = options.series.pie.label.background.color;

                            if (c == null) {
                                c = slice.color;
                            }

                            var pos = "top:" + labelTop + "px;left:" + labelLeft + "px;";
                            $("<div class='pieLabelBackground' style='position:absolute;width:" + label.width() + "px;height:" + label.height() + "px;" + pos + "background-color:" + c + ";'></div>")
                                .css("opacity", options.series.pie.label.background.opacity)
                                .insertBefore(label);
                        }

                        return true;
                    } // end individual label function
                } // end drawLabels function
            } // end drawPie function
        } // end draw function

        // Placed here because it needs to be accessed from multiple locations

        function drawDonutHole(layer) {
            if (options.series.pie.innerRadius > 0) {

                // subtract the center

                layer.save();
                var innerRadius = options.series.pie.innerRadius > 1 ? options.series.pie.innerRadius : maxRadius * options.series.pie.innerRadius;
                layer.globalCompositeOperation = "destination-out"; // this does not work with excanvas, but it will fall back to using the stroke color
                layer.beginPath();
                layer.fillStyle = options.series.pie.stroke.color;
                layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
                layer.fill();
                layer.closePath();
                layer.restore();

                // add inner stroke

                layer.save();
                layer.beginPath();
                layer.strokeStyle = options.series.pie.stroke.color;
                layer.arc(0, 0, innerRadius, 0, Math.PI * 2, false);
                layer.stroke();
                layer.closePath();
                layer.restore();

                // TODO: add extra shadow inside hole (with a mask) if the pie is tilted.
            }
        }

        //-- Additional Interactive related functions --

        function isPointInPoly(poly, pt) {
            for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
                ((poly[i][1] <= pt[1] && pt[1] < poly[j][1]) || (poly[j][1] <= pt[1] && pt[1]< poly[i][1]))
                && (pt[0] < (poly[j][0] - poly[i][0]) * (pt[1] - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0])
                && (c = !c);
            return c;
        }

        function findNearbySlice(mouseX, mouseY) {

            var slices = plot.getData(),
                options = plot.getOptions(),
                radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius,
                x, y;

            for (var i = 0; i < slices.length; ++i) {

                var s = slices[i];

                if (s.pie.show) {

                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(0, 0); // Center of the pie
                    //ctx.scale(1, options.series.pie.tilt);	// this actually seems to break everything when here.
                    ctx.arc(0, 0, radius, s.startAngle, s.startAngle + s.angle / 2, false);
                    ctx.arc(0, 0, radius, s.startAngle + s.angle / 2, s.startAngle + s.angle, false);
                    ctx.closePath();
                    x = mouseX - centerLeft;
                    y = mouseY - centerTop;

                    if (ctx.isPointInPath) {
                        if (ctx.isPointInPath(mouseX - centerLeft, mouseY - centerTop)) {
                            ctx.restore();
                            return {
                                datapoint: [s.percent, s.data],
                                dataIndex: 0,
                                series: s,
                                seriesIndex: i
                            };
                        }
                    } else {

                        // excanvas for IE doesn;t support isPointInPath, this is a workaround.

                        var p1X = radius * Math.cos(s.startAngle),
                            p1Y = radius * Math.sin(s.startAngle),
                            p2X = radius * Math.cos(s.startAngle + s.angle / 4),
                            p2Y = radius * Math.sin(s.startAngle + s.angle / 4),
                            p3X = radius * Math.cos(s.startAngle + s.angle / 2),
                            p3Y = radius * Math.sin(s.startAngle + s.angle / 2),
                            p4X = radius * Math.cos(s.startAngle + s.angle / 1.5),
                            p4Y = radius * Math.sin(s.startAngle + s.angle / 1.5),
                            p5X = radius * Math.cos(s.startAngle + s.angle),
                            p5Y = radius * Math.sin(s.startAngle + s.angle),
                            arrPoly = [[0, 0], [p1X, p1Y], [p2X, p2Y], [p3X, p3Y], [p4X, p4Y], [p5X, p5Y]],
                            arrPoint = [x, y];

                        // TODO: perhaps do some mathmatical trickery here with the Y-coordinate to compensate for pie tilt?

                        if (isPointInPoly(arrPoly, arrPoint)) {
                            ctx.restore();
                            return {
                                datapoint: [s.percent, s.data],
                                dataIndex: 0,
                                series: s,
                                seriesIndex: i
                            };
                        }
                    }

                    ctx.restore();
                }
            }

            return null;
        }

        function onMouseMove(e) {
            triggerClickHoverEvent("plothover", e);
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e);
        }

        // trigger click or hover event (they send the same parameters so we share their code)

        function triggerClickHoverEvent(eventname, e) {

            var offset = plot.offset();
            var canvasX = parseInt(e.pageX - offset.left);
            var canvasY =  parseInt(e.pageY - offset.top);
            var item = findNearbySlice(canvasX, canvasY);

            if (options.grid.autoHighlight) {

                // clear auto-highlights

                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname && !(item && h.series == item.series)) {
                        unhighlight(h.series);
                    }
                }
            }

            // highlight the slice

            if (item) {
                highlight(item.series, eventname);
            }

            // trigger any hover bind events

            var pos = { pageX: e.pageX, pageY: e.pageY };
            target.trigger(eventname, [pos, item]);
        }

        function highlight(s, auto) {
            //if (typeof s == "number") {
            //	s = series[s];
            //}

            var i = indexOfHighlight(s);

            if (i == -1) {
                highlights.push({ series: s, auto: auto });
                plot.triggerRedrawOverlay();
            } else if (!auto) {
                highlights[i].auto = false;
            }
        }

        function unhighlight(s) {
            if (s == null) {
                highlights = [];
                plot.triggerRedrawOverlay();
            }

            //if (typeof s == "number") {
            //	s = series[s];
            //}

            var i = indexOfHighlight(s);

            if (i != -1) {
                highlights.splice(i, 1);
                plot.triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s)
                    return i;
            }
            return -1;
        }

        function drawOverlay(plot, octx) {

            var options = plot.getOptions();

            var radius = options.series.pie.radius > 1 ? options.series.pie.radius : maxRadius * options.series.pie.radius;

            octx.save();
            octx.translate(centerLeft, centerTop);
            octx.scale(1, options.series.pie.tilt);

            for (var i = 0; i < highlights.length; ++i) {
                drawHighlight(highlights[i].series);
            }

            drawDonutHole(octx);

            octx.restore();

            function drawHighlight(series) {

                if (series.angle <= 0 || isNaN(series.angle)) {
                    return;
                }

                //octx.fillStyle = parseColor(options.series.pie.highlight.color).scale(null, null, null, options.series.pie.highlight.opacity).toString();
                octx.fillStyle = "rgba(255, 255, 255, " + options.series.pie.highlight.opacity + ")"; // this is temporary until we have access to parseColor
                octx.beginPath();
                if (Math.abs(series.angle - Math.PI * 2) > 0.000000001) {
                    octx.moveTo(0, 0); // Center of the pie
                }
                octx.arc(0, 0, radius, series.startAngle, series.startAngle + series.angle / 2, false);
                octx.arc(0, 0, radius, series.startAngle + series.angle / 2, series.startAngle + series.angle, false);
                octx.closePath();
                octx.fill();
            }
        }
    } // end init (plugin body)

    // define pie specific options and their default values

    var options = {
        series: {
            pie: {
                show: false,
                radius: "auto",	// actual radius of the visible pie (based on full calculated radius if <=1, or hard pixel value)
                innerRadius: 0, /* for donut */
                startAngle: 3/2,
                tilt: 1,
                shadow: {
                    left: 5,	// shadow left offset
                    top: 15,	// shadow top offset
                    alpha: 0.02	// shadow alpha
                },
                offset: {
                    top: 0,
                    left: "auto"
                },
                stroke: {
                    color: "#fff",
                    width: 1
                },
                label: {
                    show: "auto",
                    formatter: function(label, slice) {
                        return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + slice.color + ";'>" + label + "<br/>" + Math.round(slice.percent) + "%</div>";
                    },	// formatter function
                    radius: 1,	// radius at which to place the labels (based on full calculated radius if <=1, or hard pixel value)
                    background: {
                        color: null,
                        opacity: 0
                    },
                    threshold: 0	// percentage at which to hide the label (i.e. the slice is too narrow)
                },
                combine: {
                    threshold: -1,	// percentage at which to combine little slices into one larger slice
                    color: null,	// color to give the new slice (auto-generated if null)
                    label: "Other"	// label to give the new slice
                },
                highlight: {
                    //color: "#fff",		// will add this functionality once parseColor is available
                    opacity: 0.5
                }
            }
        }
    };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "pie",
        version: "1.1"
    });

})(jQuery);
/*
 * jquery.flot.tooltip
 *
 * description: easy-to-use tooltips for Flot charts
 * version: 0.9.0
 * authors: Krzysztof Urbas @krzysu [myviews.pl],Evan Steinkerchner @Roundaround
 * website: https://github.com/krzysu/flot.tooltip
 *
 * build on 2016-07-26
 * released under MIT License, 2012
*/
(function ($) {
    // plugin options, default values
    var defaultOptions = {
        tooltip: {
            show: false,
            cssClass: "flotTip",
            content: "%s | X: %x | Y: %y",
            // allowed templates are:
            // %s -> series label,
            // %c -> series color,
            // %lx -> x axis label (requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels),
            // %ly -> y axis label (requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels),
            // %x -> X value,
            // %y -> Y value,
            // %x.2 -> precision of X value,
            // %p -> percent
            // %n -> value (not percent) of pie chart
            xDateFormat: null,
            yDateFormat: null,
            monthNames: null,
            dayNames: null,
            shifts: {
                x: 10,
                y: 20
            },
            defaultTheme: true,
            snap: true,
            lines: false,
            clickTips: false,

            // callbacks
            onHover: function (flotItem, $tooltipEl) {},

            $compat: false
        }
    };

    // dummy default options object for legacy code (<0.8.5) - is deleted later
    defaultOptions.tooltipOpts = defaultOptions.tooltip;

    // object
    var FlotTooltip = function (plot) {
        // variables
        this.tipPosition = {x: 0, y: 0};

        this.init(plot);
    };

    // main plugin function
    FlotTooltip.prototype.init = function (plot) {
        var that = this;

        // detect other flot plugins
        var plotPluginsLength = $.plot.plugins.length;
        this.plotPlugins = [];

        if (plotPluginsLength) {
            for (var p = 0; p < plotPluginsLength; p++) {
                this.plotPlugins.push($.plot.plugins[p].name);
            }
        }

        plot.hooks.bindEvents.push(function (plot, eventHolder) {

            // get plot options
            that.plotOptions = plot.getOptions();

            // for legacy (<0.8.5) implementations
            if (typeof(that.plotOptions.tooltip) === 'boolean') {
                that.plotOptions.tooltipOpts.show = that.plotOptions.tooltip;
                that.plotOptions.tooltip = that.plotOptions.tooltipOpts;
                delete that.plotOptions.tooltipOpts;
            }

            // if not enabled return
            if (that.plotOptions.tooltip.show === false || typeof that.plotOptions.tooltip.show === 'undefined') return;

            // shortcut to access tooltip options
            that.tooltipOptions = that.plotOptions.tooltip;

            if (that.tooltipOptions.$compat) {
                that.wfunc = 'width';
                that.hfunc = 'height';
            } else {
                that.wfunc = 'innerWidth';
                that.hfunc = 'innerHeight';
            }

            // create tooltip DOM element
            var $tip = that.getDomElement();

            // bind event
            $( plot.getPlaceholder() ).bind("plothover", plothover);
            if (that.tooltipOptions.clickTips) {
                $( plot.getPlaceholder() ).bind("plotclick", plotclick);
            }
            that.clickmode = false;

            $(eventHolder).bind('mousemove', mouseMove);
        });

        plot.hooks.shutdown.push(function (plot, eventHolder){
            $(plot.getPlaceholder()).unbind("plothover", plothover);
            $(plot.getPlaceholder()).unbind("plotclick", plotclick);
            plot.removeTooltip();
            $(eventHolder).unbind("mousemove", mouseMove);
        });

        function mouseMove(e){
            var pos = {};
            pos.x = e.pageX;
            pos.y = e.pageY;
            plot.setTooltipPosition(pos);
        }

        /**
         *  open the tooltip (if not already open) and freeze it on the current position till the next click
         */
        function plotclick(event, pos, item) {
            if (! that.clickmode) {
                // it is the click activating the clicktip
                plothover(event, pos, item);
                if (that.getDomElement().is(":visible")) {
                    $(plot.getPlaceholder()).unbind("plothover", plothover);
                    that.clickmode = true;
                }
            } else {
                // it is the click deactivating the clicktip
                $( plot.getPlaceholder() ).bind("plothover", plothover);
                plot.hideTooltip();
                that.clickmode = false;
            }
        }

        function plothover(event, pos, item) {
            // Simple distance formula.
            var lineDistance = function (p1x, p1y, p2x, p2y) {
                return Math.sqrt((p2x - p1x) * (p2x - p1x) + (p2y - p1y) * (p2y - p1y));
            };

            // Here is some voodoo magic for determining the distance to a line form a given point {x, y}.
            var dotLineLength = function (x, y, x0, y0, x1, y1, o) {
                if (o && !(o =
                    function (x, y, x0, y0, x1, y1) {
                        if (typeof x0 !== 'undefined') return { x: x0, y: y };
                        else if (typeof y0 !== 'undefined') return { x: x, y: y0 };

                        var left,
                            tg = -1 / ((y1 - y0) / (x1 - x0));

                        return {
                            x: left = (x1 * (x * tg - y + y0) + x0 * (x * -tg + y - y1)) / (tg * (x1 - x0) + y0 - y1),
                            y: tg * left - tg * x + y
                        };
                    } (x, y, x0, y0, x1, y1),
                    o.x >= Math.min(x0, x1) && o.x <= Math.max(x0, x1) && o.y >= Math.min(y0, y1) && o.y <= Math.max(y0, y1))
                ) {
                    var l1 = lineDistance(x, y, x0, y0), l2 = lineDistance(x, y, x1, y1);
                    return l1 > l2 ? l2 : l1;
                } else {
                    var a = y0 - y1, b = x1 - x0, c = x0 * y1 - y0 * x1;
                    return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
                }
            };

            if (item) {
                plot.showTooltip(item, that.tooltipOptions.snap ? item : pos);
            } else if (that.plotOptions.series.lines.show && that.tooltipOptions.lines === true) {
                var maxDistance = that.plotOptions.grid.mouseActiveRadius;

                var closestTrace = {
                    distance: maxDistance + 1
                };

                var ttPos = pos;

                $.each(plot.getData(), function (i, series) {
                    var xBeforeIndex = 0,
                        xAfterIndex = -1;

                    // Our search here assumes our data is sorted via the x-axis.
                    // TODO: Improve efficiency somehow - search smaller sets of data.
                    for (var j = 1; j < series.data.length; j++) {
                        if (series.data[j - 1][0] <= pos.x && series.data[j][0] >= pos.x) {
                            xBeforeIndex = j - 1;
                            xAfterIndex = j;
                        }
                    }

                    if (xAfterIndex === -1) {
                        plot.hideTooltip();
                        return;
                    }

                    var pointPrev = { x: series.data[xBeforeIndex][0], y: series.data[xBeforeIndex][1] },
                        pointNext = { x: series.data[xAfterIndex][0], y: series.data[xAfterIndex][1] };

                    var distToLine = dotLineLength(series.xaxis.p2c(pos.x), series.yaxis.p2c(pos.y), series.xaxis.p2c(pointPrev.x),
                        series.yaxis.p2c(pointPrev.y), series.xaxis.p2c(pointNext.x), series.yaxis.p2c(pointNext.y), false);

                    if (distToLine < closestTrace.distance) {

                        var closestIndex = lineDistance(pointPrev.x, pointPrev.y, pos.x, pos.y) <
                            lineDistance(pos.x, pos.y, pointNext.x, pointNext.y) ? xBeforeIndex : xAfterIndex;

                        var pointSize = series.datapoints.pointsize;

                        // Calculate the point on the line vertically closest to our cursor.
                        var pointOnLine = [
                            pos.x,
                            pointPrev.y + ((pointNext.y - pointPrev.y) * ((pos.x - pointPrev.x) / (pointNext.x - pointPrev.x)))
                        ];

                        var item = {
                            datapoint: pointOnLine,
                            dataIndex: closestIndex,
                            series: series,
                            seriesIndex: i
                        };

                        closestTrace = {
                            distance: distToLine,
                            item: item
                        };

                        if (that.tooltipOptions.snap) {
                            ttPos = {
                                pageX: series.xaxis.p2c(pointOnLine[0]),
                                pageY: series.yaxis.p2c(pointOnLine[1])
                            };
                        }
                    }
                });

                if (closestTrace.distance < maxDistance + 1)
                    plot.showTooltip(closestTrace.item, ttPos);
                else
                    plot.hideTooltip();
            } else {
                plot.hideTooltip();
            }
        }

        // Quick little function for setting the tooltip position.
        plot.setTooltipPosition = function (pos) {
            var $tip = that.getDomElement();

            var totalTipWidth = $tip.outerWidth() + that.tooltipOptions.shifts.x;
            var totalTipHeight = $tip.outerHeight() + that.tooltipOptions.shifts.y;
            if ((pos.x - $(window).scrollLeft()) > ($(window)[that.wfunc]() - totalTipWidth)) {
                pos.x -= totalTipWidth;
                pos.x = Math.max(pos.x, 0);
            }
            if ((pos.y - $(window).scrollTop()) > ($(window)[that.hfunc]() - totalTipHeight)) {
                pos.y -= totalTipHeight;
            }

	    /*
	       The section applies the new positioning ONLY if pos.x and pos.y
	       are numbers. If they are undefined or not a number, use the last
	       known numerical position. This hack fixes a bug that kept pie
	       charts from keeping their tooltip positioning.
	     */

            if (isNaN(pos.x)) {
		that.tipPosition.x = that.tipPosition.xPrev;
	    }
	    else {
		that.tipPosition.x = pos.x;
		that.tipPosition.xPrev = pos.x;
	    }
	    if (isNaN(pos.y)) {
		that.tipPosition.y = that.tipPosition.yPrev;
	    }
	    else {
		that.tipPosition.y = pos.y;
		that.tipPosition.yPrev = pos.y;
	    }

        };

        // Quick little function for showing the tooltip.
        plot.showTooltip = function (target, position, targetPosition) {
            var $tip = that.getDomElement();

            // convert tooltip content template to real tipText
            var tipText = that.stringFormat(that.tooltipOptions.content, target);
            if (tipText === '')
                return;

            $tip.html(tipText);
            plot.setTooltipPosition({ x: that.tipPosition.x, y: that.tipPosition.y });
            $tip.css({
                left: that.tipPosition.x + that.tooltipOptions.shifts.x,
                top: that.tipPosition.y + that.tooltipOptions.shifts.y
            }).show();

            // run callback
            if (typeof that.tooltipOptions.onHover === 'function') {
                that.tooltipOptions.onHover(target, $tip);
            }
        };

        // Quick little function for hiding the tooltip.
        plot.hideTooltip = function () {
            that.getDomElement().hide().html('');
        };

        plot.removeTooltip = function() {
            that.getDomElement().remove();
        };
    };

    /**
     * get or create tooltip DOM element
     * @return jQuery object
     */
    FlotTooltip.prototype.getDomElement = function () {
        var $tip = $('<div>');
        if (this.tooltipOptions && this.tooltipOptions.cssClass) {
            $tip = $('.' + this.tooltipOptions.cssClass);

            if( $tip.length === 0 ){
                $tip = $('<div />').addClass(this.tooltipOptions.cssClass);
                $tip.appendTo('body').hide().css({position: 'absolute'});

                if(this.tooltipOptions.defaultTheme) {
                    $tip.css({
                        'background': '#fff',
                        'z-index': '1040',
                        'padding': '0.4em 0.6em',
                        'border-radius': '0.5em',
                        'font-size': '0.8em',
                        'border': '1px solid #111',
                        'display': 'none',
                        'white-space': 'nowrap'
                    });
                }
            }
        }

        return $tip;
    };

    /**
     * core function, create tooltip content
     * @param  {string} content - template with tooltip content
     * @param  {object} item - Flot item
     * @return {string} real tooltip content for current item
     */
    FlotTooltip.prototype.stringFormat = function (content, item) {
        var percentPattern = /%p\.{0,1}(\d{0,})/;
        var seriesPattern = /%s/;
        var colorPattern = /%c/;
        var xLabelPattern = /%lx/; // requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels, will be ignored if plugin isn't loaded
        var yLabelPattern = /%ly/; // requires flot-axislabels plugin https://github.com/markrcote/flot-axislabels, will be ignored if plugin isn't loaded
        var xPattern = /%x\.{0,1}(\d{0,})/;
        var yPattern = /%y\.{0,1}(\d{0,})/;
        var xPatternWithoutPrecision = "%x";
        var yPatternWithoutPrecision = "%y";
        var customTextPattern = "%ct";
	var nPiePattern = "%n";

        var x, y, customText, p, n;

        // for threshold plugin we need to read data from different place
        if (typeof item.series.threshold !== "undefined") {
            x = item.datapoint[0];
            y = item.datapoint[1];
            customText = item.datapoint[2];
	}

	// for CurvedLines plugin we need to read data from different place
	    else if (typeof item.series.curvedLines !== "undefined") {
		x = item.datapoint[0];
		y = item.datapoint[1];
	    }

        else if (typeof item.series.lines !== "undefined" && item.series.lines.steps) {
            x = item.series.datapoints.points[item.dataIndex * 2];
            y = item.series.datapoints.points[item.dataIndex * 2 + 1];
            // TODO: where to find custom text in this variant?
            customText = "";
        } else {
            x = item.series.data[item.dataIndex][0];
            y = item.series.data[item.dataIndex][1];
            customText = item.series.data[item.dataIndex][2];
        }

        // I think this is only in case of threshold plugin
        if (item.series.label === null && item.series.originSeries) {
            item.series.label = item.series.originSeries.label;
        }

        // if it is a function callback get the content string
        if (typeof(content) === 'function') {
            content = content(item.series.label, x, y, item);
        }

        // the case where the passed content is equal to false
        if (typeof(content) === 'boolean' && !content) {
            return '';
        }

        /* replacement of %ct and other multi-character templates must
           precede the replacement of single-character templates
           to avoid conflict between '%c' and '%ct'  and similar substrings
        */
        if (customText) {
            content = content.replace(customTextPattern, customText);
        }

        // percent match for pie charts and stacked percent
        if (typeof (item.series.percent) !== 'undefined') {
            p = item.series.percent;
        } else if (typeof (item.series.percents) !== 'undefined') {
            p = item.series.percents[item.dataIndex];
        }
        if (typeof p === 'number') {
            content = this.adjustValPrecision(percentPattern, content, p);
        }

        // replace %n with number of items represented by slice in pie charts
        if (item.series.hasOwnProperty('pie')) {
            if (typeof item.series.data[0][1] !== 'undefined') {
                n = item.series.data[0][1];
            }
        }
        if (typeof n === 'number') {
            content = content.replace(nPiePattern, n);
        }

        // series match
        if (typeof(item.series.label) !== 'undefined') {
            content = content.replace(seriesPattern, item.series.label);
        } else {
            //remove %s if label is undefined
            content = content.replace(seriesPattern, "");
        }

        // color match
        if (typeof(item.series.color) !== 'undefined') {
            content = content.replace(colorPattern, item.series.color);
        } else {
            //remove %s if color is undefined
            content = content.replace(colorPattern, "");
        }

        // x axis label match
        if (this.hasAxisLabel('xaxis', item)) {
            content = content.replace(xLabelPattern, item.series.xaxis.options.axisLabel);
        } else {
            //remove %lx if axis label is undefined or axislabels plugin not present
            content = content.replace(xLabelPattern, "");
        }

        // y axis label match
        if (this.hasAxisLabel('yaxis', item)) {
            content = content.replace(yLabelPattern, item.series.yaxis.options.axisLabel);
        } else {
            //remove %ly if axis label is undefined or axislabels plugin not present
            content = content.replace(yLabelPattern, "");
        }

        // time mode axes with custom dateFormat
        if (this.isTimeMode('xaxis', item) && this.isXDateFormat(item)) {
            content = content.replace(xPattern, this.timestampToDate(x, this.tooltipOptions.xDateFormat, item.series.xaxis.options));
        }
        if (this.isTimeMode('yaxis', item) && this.isYDateFormat(item)) {
            content = content.replace(yPattern, this.timestampToDate(y, this.tooltipOptions.yDateFormat, item.series.yaxis.options));
        }

        // set precision if defined
        if (typeof x === 'number') {
            content = this.adjustValPrecision(xPattern, content, x);
        }
        if (typeof y === 'number') {
            content = this.adjustValPrecision(yPattern, content, y);
        }

        // change x from number to given label, if given
        if (typeof item.series.xaxis.ticks !== 'undefined') {

            var ticks;
            if (this.hasRotatedXAxisTicks(item)) {
                // xaxis.ticks will be an empty array if tickRotor is being used, but the values are available in rotatedTicks
                ticks = 'rotatedTicks';
            } else {
                ticks = 'ticks';
            }

            // see https://github.com/krzysu/flot.tooltip/issues/65
            var tickIndex = item.dataIndex + item.seriesIndex;

            for (var xIndex in item.series.xaxis[ticks]) {
                if (item.series.xaxis[ticks].hasOwnProperty(tickIndex) && !this.isTimeMode('xaxis', item)) {
                    var valueX = (this.isCategoriesMode('xaxis', item)) ? item.series.xaxis[ticks][tickIndex].label : item.series.xaxis[ticks][tickIndex].v;
                    if (valueX === x) {
                        content = content.replace(xPattern, item.series.xaxis[ticks][tickIndex].label.replace(/\$/g, '$$$$'));
                    }
                }
            }
        }

        // change y from number to given label, if given
        if (typeof item.series.yaxis.ticks !== 'undefined') {
            for (var yIndex in item.series.yaxis.ticks) {
                if (item.series.yaxis.ticks.hasOwnProperty(yIndex)) {
                    var valueY = (this.isCategoriesMode('yaxis', item)) ? item.series.yaxis.ticks[yIndex].label : item.series.yaxis.ticks[yIndex].v;
                    if (valueY === y) {
                        content = content.replace(yPattern, item.series.yaxis.ticks[yIndex].label.replace(/\$/g, '$$$$'));
                    }
                }
            }
        }

        // if no value customization, use tickFormatter by default
        if (typeof item.series.xaxis.tickFormatter !== 'undefined') {
            //escape dollar
            content = content.replace(xPatternWithoutPrecision, item.series.xaxis.tickFormatter(x, item.series.xaxis).replace(/\$/g, '$$'));
        }
        if (typeof item.series.yaxis.tickFormatter !== 'undefined') {
            //escape dollar
            content = content.replace(yPatternWithoutPrecision, item.series.yaxis.tickFormatter(y, item.series.yaxis).replace(/\$/g, '$$'));
        }

        return content;
    };

    // helpers just for readability
    FlotTooltip.prototype.isTimeMode = function (axisName, item) {
        return (typeof item.series[axisName].options.mode !== 'undefined' && item.series[axisName].options.mode === 'time');
    };

    FlotTooltip.prototype.isXDateFormat = function (item) {
        return (typeof this.tooltipOptions.xDateFormat !== 'undefined' && this.tooltipOptions.xDateFormat !== null);
    };

    FlotTooltip.prototype.isYDateFormat = function (item) {
        return (typeof this.tooltipOptions.yDateFormat !== 'undefined' && this.tooltipOptions.yDateFormat !== null);
    };

    FlotTooltip.prototype.isCategoriesMode = function (axisName, item) {
        return (typeof item.series[axisName].options.mode !== 'undefined' && item.series[axisName].options.mode === 'categories');
    };

    //
    FlotTooltip.prototype.timestampToDate = function (tmst, dateFormat, options) {
        var theDate = $.plot.dateGenerator(tmst, options);
        return $.plot.formatDate(theDate, dateFormat, this.tooltipOptions.monthNames, this.tooltipOptions.dayNames);
    };

    //
    FlotTooltip.prototype.adjustValPrecision = function (pattern, content, value) {

        var precision;
        var matchResult = content.match(pattern);
        if( matchResult !== null ) {
            if(RegExp.$1 !== '') {
                precision = RegExp.$1;
                value = value.toFixed(precision);

                // only replace content if precision exists, in other case use thickformater
                content = content.replace(pattern, value);
            }
        }
        return content;
    };

    // other plugins detection below

    // check if flot-axislabels plugin (https://github.com/markrcote/flot-axislabels) is used and that an axis label is given
    FlotTooltip.prototype.hasAxisLabel = function (axisName, item) {
        return ($.inArray('axisLabels', this.plotPlugins) !== -1 && typeof item.series[axisName].options.axisLabel !== 'undefined' && item.series[axisName].options.axisLabel.length > 0);
    };

    // check whether flot-tickRotor, a plugin which allows rotation of X-axis ticks, is being used
    FlotTooltip.prototype.hasRotatedXAxisTicks = function (item) {
        return ($.inArray('tickRotor',this.plotPlugins) !== -1 && typeof item.series.xaxis.rotatedTicks !== 'undefined');
    };

    //
    var init = function (plot) {
      new FlotTooltip(plot);
    };

    // define Flot plugin
    $.plot.plugins.push({
        init: init,
        options: defaultOptions,
        name: 'tooltip',
        version: '0.8.5'
    });

})(jQuery);


$(function() {

    //Interacting with Data Points example

    var sin = [], cos = [];

    for (var i = 0; i < 354; i += 31) {
        sin.push([i, Math.random(i)]);
        cos.push([i, Math.random(i)]);
    }

    var plot = $.plot($("#data-example-1"),
        [{ data: sin, label: "Today" }, { data: cos, label: "Yesterday" }], {
            series: {

                shadowSize: 0,
                lines: {
                    show: true,
                    lineWidth: 2
                },
                points: { show: true }
            },
            grid: {
                labelMargin: 10,
                hoverable: true,
                clickable: true,
                borderWidth: 1,
                borderColor: 'rgba(82, 167, 224, 0.06)'
            },
            legend: {
                backgroundColor: '#fff'
            },
            yaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
            xaxis: { tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
            colors: [getUIColor('success'), getUIColor('gray')],
            tooltip: true,
            tooltipOpts: {
                content: "x: %x, y: %y"
            }
        });

    var previousPoint = null;
    $("#data-example-1").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
    });

    $("#data-example-1").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text("You clicked point " + item.dataIndex + " in " + item.series.label + ".");
            plot.highlight(item.series, item.datapoint);
        }
    });


});


$(function() {

    // We use an inline data source in the example, usually data would
    // be fetched from a server

    var data = [],
        totalPoints = 300;

    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            data.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

    // Set up the control widget

    var updateInterval = 30;

    var plot = $.plot("#data-example-3", [ getRandomData() ], {

        series: {
            lines: {
                show: true,
                lineWidth: 2,
                fill: 0.5,
                fillColor: { colors: [ { opacity: 0.01 }, { opacity: 0.08 } ] }
            },
            shadowSize: 0   // Drawing is faster without shadows
        },
        grid: {
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            borderWidth: 1,
            borderColor: 'rgba(82, 167, 224, 0.06)'
        },
        yaxis: {
            min: 0,
            max: 120,
            tickColor: 'rgba(0, 0, 0, 0.06)', font: {color: 'rgba(0, 0, 0, 0.4)'}},
        xaxis: { show: false },
        colors: [getUIColor('default'),getUIColor('gray')]
    });

    function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();

});
// Generated by CoffeeScript 1.6.2
/*
 Easy pie chart is a jquery plugin to display simple animated pie charts for only one value

 Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.

 Built on top of the jQuery library (http://jquery.com)

 @source: http://github.com/rendro/easy-pie-chart/
 @autor: Robert Fleischmann
 @version: 1.2.1

 Inspired by: http://dribbble.com/shots/631074-Simple-Pie-Charts-II?list=popular&offset=210
 Thanks to Philip Thrasher for the jquery plugin boilerplate for coffee script
 */
(function($) {
    $.easyPieChart = function(el, options) {
        var addScaleLine, animateLine, drawLine, easeInOutQuad, rAF, renderBackground, renderScale, renderTrack,
            _this = this;

        this.el = el;
        this.$el = $(el);
        this.$el.data("easyPieChart", this);
        this.init = function() {
            var percent, scaleBy;

            _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
            percent = parseInt(_this.$el.data('percent'), 10);
            _this.percentage = 0;
            _this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
            _this.$el.append(_this.canvas);
            if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
                G_vmlCanvasManager.initElement(_this.canvas);
            }
            _this.ctx = _this.canvas.getContext('2d');
            if (window.devicePixelRatio > 1) {
                scaleBy = window.devicePixelRatio;
                $(_this.canvas).css({
                    width: _this.options.size,
                    height: _this.options.size
                });
                _this.canvas.width *= scaleBy;
                _this.canvas.height *= scaleBy;
                _this.ctx.scale(scaleBy, scaleBy);
            }
            _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
            _this.ctx.rotate(_this.options.rotate * Math.PI / 180);
            _this.$el.addClass('easyPieChart');
            _this.$el.css({
                width: _this.options.size,
                height: _this.options.size,
                lineHeight: "" + _this.options.size + "px"
            });
            _this.update(percent);
            return _this;
        };
        this.update = function(percent) {
            percent = parseFloat(percent) || 0;
            if (_this.options.animate === false) {
                drawLine(percent);
            } else {
                animateLine(_this.percentage, percent);
            }
            return _this;
        };
        renderScale = function() {
            var i, _i, _results;

            _this.ctx.fillStyle = _this.options.scaleColor;
            _this.ctx.lineWidth = 1;
            _results = [];
            for (i = _i = 0; _i <= 24; i = ++_i) {
                _results.push(addScaleLine(i));
            }
            return _results;
        };
        addScaleLine = function(i) {
            var offset;

            offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
            _this.ctx.save();
            _this.ctx.rotate(i * Math.PI / 12);
            _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
            _this.ctx.restore();
        };
        renderTrack = function() {
            var offset;

            offset = _this.options.size / 2 - _this.options.lineWidth / 2;
            if (_this.options.scaleColor !== false) {
                offset -= _this.options.size * 0.08;
            }
            _this.ctx.beginPath();
            _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
            _this.ctx.closePath();
            _this.ctx.strokeStyle = _this.options.trackColor;
            _this.ctx.lineWidth = _this.options.lineWidth;
            _this.ctx.stroke();
        };
        renderBackground = function() {
            if (_this.options.scaleColor !== false) {
                renderScale();
            }
            if (_this.options.trackColor !== false) {
                renderTrack();
            }
        };
        drawLine = function(percent) {
            var offset;

            renderBackground();
            _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
            _this.ctx.lineCap = _this.options.lineCap;
            _this.ctx.lineWidth = _this.options.lineWidth;
            offset = _this.options.size / 2 - _this.options.lineWidth / 2;
            if (_this.options.scaleColor !== false) {
                offset -= _this.options.size * 0.08;
            }
            _this.ctx.save();
            _this.ctx.rotate(-Math.PI / 2);
            _this.ctx.beginPath();
            _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
            _this.ctx.stroke();
            _this.ctx.restore();
        };
        rAF = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
        })();
        animateLine = function(from, to) {
            var anim, startTime;

            _this.options.onStart.call(_this);
            _this.percentage = to;
            startTime = Date.now();
            anim = function() {
                var currentValue, process;

                process = Date.now() - startTime;
                if (process < _this.options.animate) {
                    rAF(anim);
                }
                _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
                renderBackground.call(_this);
                currentValue = [easeInOutQuad(process, from, to - from, _this.options.animate)];
                _this.options.onStep.call(_this, currentValue);
                drawLine.call(_this, currentValue);
                if (process >= _this.options.animate) {
                    return _this.options.onStop.call(_this);
                }
            };
            rAF(anim);
        };
        easeInOutQuad = function(t, b, c, d) {
            var easeIn, easing;

            easeIn = function(t) {
                return Math.pow(t, 2);
            };
            easing = function(t) {
                if (t < 1) {
                    return easeIn(t);
                } else {
                    return 2 - easeIn((t / 2) * -2 + 2);
                }
            };
            t /= d / 2;
            return c / 2 * easing(t) + b;
        };
        return this.init();
    };
    $.easyPieChart.defaultOptions = {
        barColor: '#ef1e25',
        trackColor: '#f2f2f2',
        scaleColor: '#dfe0e0',
        lineCap: 'round',
        rotate: 0,
        size: 110,
        lineWidth: 3,
        animate: false,
        onStart: $.noop,
        onStop: $.noop,
        onStep: $.noop
    };
    $.fn.easyPieChart = function(options) {
        return $.each(this, function(i, el) {
            var $el, instanceOptions;

            $el = $(el);
            if (!$el.data('easyPieChart')) {
                instanceOptions = $.extend({}, options, $el.data());
                return $el.data('easyPieChart', new $.easyPieChart(el, instanceOptions));
            }
        });
    };
    return void 0;
})(jQuery);
/* Pie gauges */

var initPieChart = function() {

    $('.chart').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(254 * (1 - percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        animate: 1000,
        scaleColor: '#ccc',
        lineWidth: 3,
        size: 100,
        lineCap: 'cap',
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });


    $('.chart-home').easyPieChart({
        barColor: 'rgba(255,255,255,0.5)',
        trackColor: 'rgba(255,255,255,0.1)',
        animate: 1000,
        scaleColor: 'rgba(255,255,255,0.3)',
        lineWidth: 3,
        size: 100,
        lineCap: 'cap',
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.chart-alt').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1 - percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#333',
        scaleColor: false,
        lineCap: 'butt',
        rotate: -90,
        lineWidth: 20,
        animate: 1500,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.chart-alt-1').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1 - percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#e1ecf1',
        scaleColor: '#c4d7e0',
        lineCap: 'cap',
        rotate: -90,
        lineWidth: 10,
        size: 80,
        animate: 2500,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.chart-alt-2').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1 - percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#fff',
        scaleColor: false,
        lineCap: 'butt',
        rotate: -90,
        lineWidth: 4,
        size: 50,
        animate: 1500,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.chart-alt-3').easyPieChart({
        barColor: function(percent) {
            percent /= 100;
            return "rgb(" + Math.round(255 * (1 - percent)) + ", " + Math.round(255 * percent) + ", 0)";
        },
        trackColor: '#333',
        scaleColor: true,
        lineCap: 'butt',
        rotate: -90,
        lineWidth: 4,
        size: 50,
        animate: 1500,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.chart-alt-10').easyPieChart({
        barColor: 'rgba(255,255,255,255.4)',
        trackColor: 'rgba(255,255,255,0.1)',
        scaleColor: 'transparent',
        lineCap: 'round',
        rotate: -90,
        lineWidth: 4,
        size: 100,
        animate: 2500,
        onStep: function(value) {
            this.$el.find('span').text(~~value);
        }
    });

    $('.updateEasyPieChart').on('click', function(e) {
        e.preventDefault();
        $('.chart-home, .chart, .chart-alt, .chart-alt-1, .chart-alt-2, .chart-alt-3, .chart-alt-10').each(function() {
            $(this).data('easyPieChart').update(Math.round(100 * Math.random()));
        });
    });
};

$(document).ready(function() {

    initPieChart();

});

/* Progress bars */

function progress(percent, element) {
    var progressBarWidth = percent * element.width() / 100;

    element.find('.progressbar-value').animate({ width: progressBarWidth }, 1200);
}

$(document).on('ready', function() {

    $('.progressbar').each(function() {
        var bar = $(this);
        var max = $(this).attr('data-value');

        progress(max, bar);
    });

});

$(function(){

    $('#header-right, .updateEasyPieChart, .complete-user-profile, #progress-dropdown, .progress-box').hover(function () {

        $('.progressbar').each(function() {
            var bar = $(this);
            var max = $(this).attr('data-value');

            progress(max, bar);
        });

    });

});
/*
 * Superclick v1.0.0 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */

;(function($) {

	var methods = (function(){
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			outerClick = (function() {
				$(window).load(function() {
					$('body').children().on('click.superclick', function() {
						var $allMenus = $('.sf-js-enabled');
						$allMenus.superclick('reset');
					});
				});
			})(),
			toggleMenuClasses = function($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.activeClass + ' ' + c.bcClass)
						.filter(function() {
							return ($(this).children('.sidebar-submenu').hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			clickHandler = function(e) {
				var $this = $(this),
					$ul = $this.siblings('.sidebar-submenu'),
					func;

				if ($ul.length) {
					func = ($ul.is(':hidden')) ? over : out;
					$.proxy(func, $this.parent('li'))();
					return false;
				}
			},
			over = function() {
				var $this = $(this),
					o = getOptions($this);
				$this.siblings().superclick('hide').end().superclick('show');
			},
			out = function() {
				var $this = $(this),
					o = getOptions($this);
				$.proxy(close, $this, o)();
			},
			close = function(o) {
				o.retainPath = ( $.inArray(this[0], o.$path) > -1);
				this.superclick('hide');

				if (!this.parents('.' + o.activeClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function($el) {
				return getMenu($el).data('sf-options');
			};

		return {
			// public methods
			hide: function(instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
						if (!o) {
							return this;
						}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.activeClass).add(this).not(not).removeClass(o.activeClass).children('.sidebar-submenu'),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function() {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function() {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.activeClass),
					$ul = $this.children('.sidebar-submenu');

				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function() {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function() {
				return this.each(function(){
					var $this = $(this),
						o = $this.data('sf-options'),
						$liHasUl = $this.find('li:has(ul)');
					if (!o) {
						return false;
					}
					toggleMenuClasses($this, o);
					toggleAnchorClass($liHasUl);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superclick');
					// clear animation's inline display style
					$liHasUl.children('.sidebar-submenu').attr('style', function(i, style){
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.activeClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.activeClass).removeClass(o.activeClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			reset: function() {
				return this.each(function(){
					var $menu = $(this),
						o = getOptions($menu),
						$openLis = $( $menu.find('.' + o.activeClass).toArray().reverse() );
					$openLis.children('a').trigger('click');
				});
			},
			init: function(op){
				return this.each(function() {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superclick.defaults, op),
						$liHasUl = $this.find('li:has(ul)');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($liHasUl);
					toggleTouchAction($this);
					$this.on('click.superclick', 'a', clickHandler);

					$liHasUl.not('.' + c.bcClass).superclick('hide',true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superclick = function(method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superclick');
		}
	};

	$.fn.superclick.defaults = {
		activeClass: 'sfHover', // keep 'hover' in classname for compatibility reasons
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		animation: {opacity:'show'},
		animationOut: {opacity:'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};

})(jQuery);
(function( $ ) {
    $.fn.simpleCheckbox = function(options) {
        var defaults = {
            newElementClass: 'switch-toggle',
            activeElementClass: 'switch-on'
        };
        var options = $.extend(defaults, options);
        this.each(function() {
            //Assign the current checkbox to obj
            var obj = $(this);
            //Create new span element to be styled
            var newObj = $('<div/>', {
                'id': '#' + obj.attr('id'),
                'class': options.newElementClass,
                'style': 'display: block;'
            }).insertAfter(this);
            //Make sure pre-checked boxes are rendered as checked
            if(obj.is(':checked')) {
                newObj.addClass(options.activeElementClass);
            }
            obj.hide(); //Hide original checkbox
            //Labels can be painful, let's fix that
            if($('[for=' + obj.attr('id') + ']').length) {

                var label = $('[for=' + obj.attr('id') + ']');
                label.click(function() {
                    newObj.trigger('click'); //Force the label to fire our element
                    return false;
                });
            }
            //Attach a click handler
            newObj.click(function() {
                //Assign current clicked object
                var obj = $(this);
                //Check the current state of the checkbox
                if(obj.hasClass(options.activeElementClass)) {
                    obj.removeClass(options.activeElementClass);
                    $(obj.attr('id')).attr('checked',false);
                } else {
                    obj.addClass(options.activeElementClass);
                    $(obj.attr('id')).attr('checked',true);
                }
                //Kill the click function
                return false;
            });
        });
    };
})(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);

// -----------------------------------
// Slidebars
// Development version, do not use this in your site, use the latest in the distribution folder.
// http://plugins.adchsm.me/slidebars/
//
// Written by Adam Smith
// http://www.adchsm.me/
//
// Released under MIT License
// http://plugins.adchsm.me/slidebars/license.txt
//
// ---------------------
// Index of Slidebars.js
//
// 001 - Default Settings
// 002 - Feature Detection
// 003 - User Agents
// 004 - Setup
// 005 - Animation
// 006 - Operations
// 007 - API
// 008 - User Input

;(function($) {

    $.slidebars = function(options) {

        // ----------------------
        // 001 - Default Settings

        var settings = $.extend({
            siteClose: true, // true or false - Enable closing of Slidebars by clicking on #sb-site.
            scrollLock: false, // true or false - Prevent scrolling of site when a Slidebar is open.
            disableOver: false, // integer or false - Hide Slidebars over a specific width.
            hideControlClasses: false // true or false - Hide controls at same width as disableOver.
        }, options);

        // -----------------------
        // 002 - Feature Detection

        var test = document.createElement('div').style, // Create element to test on.
            supportTransition = false, // Variable for testing transitions.
            supportTransform = false; // variable for testing transforms.

        // Test for CSS Transitions
        if (test.MozTransition === '' || test.WebkitTransition === '' || test.OTransition === '' || test.transition === '') supportTransition = true;

        // Test for CSS Transforms
        if (test.MozTransform === '' || test.WebkitTransform === '' || test.OTransform === '' || test.transform === '') supportTransform = true;

        // -----------------
        // 003 - User Agents

        var ua = navigator.userAgent, // Get user agent string.
            android = false, // Variable for storing android version.
            iOS = false; // Variable for storing iOS version.

        if (/Android/.test(ua)) { // Detect Android in user agent string.
            android = ua.substr(ua.indexOf('Android')+8, 3); // Set version of Android.
        } else if (/(iPhone|iPod|iPad)/.test(ua)) { // Detect iOS in user agent string.
            iOS = ua.substr(ua.indexOf('OS ')+3, 3).replace('_', '.'); // Set version of iOS.
        }

        if (android && android < 3 || iOS && iOS < 5) $('html').addClass('sb-static'); // Add helper class for older versions of Android & iOS.

        // -----------
        // 004 - Setup

        // Site container
        var $site = $('#sb-site, .sb-site-container'); // Cache the selector.

        // Left Slidebar
        if ($('.sb-left').length) { // Check if the left Slidebar exists.
            var $left = $('.sb-left'), // Cache the selector.
                leftActive = false; // Used to check whether the left Slidebar is open or closed.
        }

        // Right Slidebar
        if ($('.sb-right').length) { // Check if the right Slidebar exists.
            var $right = $('.sb-right'), // Cache the selector.
                rightActive = false; // Used to check whether the right Slidebar is open or closed.
        }

        var init = false, // Initialisation variable.
            windowWidth = $(window).width(), // Get width of window.
            $controls = $('.sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close'), // Cache the control classes.
            $slide = $('.sb-slide'); // Cache users elements to animate.

        // Initailise Slidebars
        function initialise() {
            if (!settings.disableOver || (typeof settings.disableOver === 'number' && settings.disableOver >= windowWidth)) { // False or larger than window size.
                init = true; // true enabled Slidebars to open.
                $('html').addClass('sb-init'); // Add helper class.
                if (settings.hideControlClasses) $controls.removeClass('sb-hide'); // Remove class just incase Slidebars was originally disabled.
                css(); // Set required inline styles.
            } else if (typeof settings.disableOver === 'number' && settings.disableOver < windowWidth) { // Less than window size.
                init = false; // false stop Slidebars from opening.
                $('html').removeClass('sb-init'); // Remove helper class.
                if (settings.hideControlClasses) $controls.addClass('sb-hide'); // Hide controls
                $site.css('minHeight', ''); // Remove minimum height.
                if (leftActive || rightActive) close(); // Close Slidebars if open.
            }
        }
        initialise();

        // Inline CSS
        function css() {
            // Set minimum height.
            $site.css('minHeight', ''); // Reset minimum height.
            $site.css('minHeight', $('html').height() + 'px'); // Set minimum height of the site to the minimum height of the html.

            // Custom Slidebar widths.
            if ($left && $left.hasClass('sb-width-custom')) $left.css('width', $left.attr('data-sb-width')); // Set user custom width.
            if ($right && $right.hasClass('sb-width-custom')) $right.css('width', $right.attr('data-sb-width')); // Set user custom width.

            // Set off-canvas margins for Slidebars with push and overlay animations.
            if ($left && ($left.hasClass('sb-style-push') || $left.hasClass('sb-style-overlay'))) $left.css('marginLeft', '-' + $left.css('width'));
            if ($right && ($right.hasClass('sb-style-push') || $right.hasClass('sb-style-overlay'))) $right.css('marginRight', '-' + $right.css('width'));

            // Site scroll locking.
            if (settings.scrollLock) $('html').addClass('sb-scroll-lock');
        }

        // Resize Functions
        $(window).resize(function() {
            var resizedWindowWidth = $(window).width(); // Get resized window width.
            if (windowWidth !== resizedWindowWidth) { // Slidebars is running and window was actually resized.
                windowWidth = resizedWindowWidth; // Set the new window width.
                initialise(); // Call initalise to see if Slidebars should still be running.
                if (leftActive) open('left'); // If left Slidebar is open, calling open will ensure it is the correct size.
                if (rightActive) open('right'); // If right Slidebar is open, calling open will ensure it is the correct size.
            }
        });
        // I may include a height check along side a width check here in future.

        // ---------------
        // 005 - Animation

        var animation; // Animation type.

        // Set animation type.
        if (supportTransition && supportTransform) { // Browser supports css transitions and transforms.
            animation = 'translate'; // Translate for browsers that support it.
            if (android && android < 4.4) animation = 'side'; // Android supports both, but can't translate any fixed positions, so use left instead.
        } else {
            animation = 'jQuery'; // Browsers that don't support css transitions and transitions.
        }

        // Animate mixin.
        function animate(object, amount, side) {
            // Choose selectors depending on animation style.
            var selector;

            if (object.hasClass('sb-style-push')) {
                selector = $site.add(object).add($slide); // Push - Animate site, Slidebar and user elements.
            } else if (object.hasClass('sb-style-overlay')) {
                selector = object; // Overlay - Animate Slidebar only.
            } else {
                selector = $site.add($slide); // Reveal - Animate site and user elements.
            }

            // Apply animation
            if (animation === 'translate') {
                selector.css('transform', 'translate(' + amount + ')'); // Apply the animation.

            } else if (animation === 'side') {
                if (amount[0] === '-') amount = amount.substr(1); // Remove the '-' from the passed amount for side animations.
                if (amount !== '0px') selector.css(side, '0px'); // Add a 0 value so css transition works.
                setTimeout(function() { // Set a timeout to allow the 0 value to be applied above.
                    selector.css(side, amount); // Apply the animation.
                }, 1);

            } else if (animation === 'jQuery') {
                if (amount[0] === '-') amount = amount.substr(1); // Remove the '-' from the passed amount for jQuery animations.
                var properties = {};
                properties[side] = amount;
                selector.stop().animate(properties, 400); // Stop any current jQuery animation before starting another.
            }

            // If closed, remove the inline styling on completion of the animation.
            setTimeout(function() {
                if (amount === '0px') {
                    selector.removeAttr('style');
                    css();
                }
            }, 400);
        }

        // ----------------
        // 006 - Operations

        // Open a Slidebar
        function open(side, callback) {
            // Check to see if opposite Slidebar is open.
            if (side === 'left' && $left && rightActive || side === 'right' && $right && leftActive) { // It's open, close it, then continue.
                close();
                setTimeout(proceed, 400);
            } else { // Its not open, continue.
                proceed();
            }

            // Open
            function proceed() {
                if (init && side === 'left' && $left) { // Slidebars is initiated, left is in use and called to open.
                    $('html').addClass('sb-active sb-active-left'); // Add active classes.
                    $left.addClass('sb-active');
                    animate($left, $left.css('width'), 'left'); // Animation
                    setTimeout(function() {
                        leftActive = true;
                        if (typeof callback === 'function') callback(); // Run callback function.
                    }, 400); // Set active variables.
                } else if (init && side === 'right' && $right) { // Slidebars is initiated, right is in use and called to open.
                    $('html').addClass('sb-active sb-active-right'); // Add active classes.
                    $right.addClass('sb-active');
                    animate($right, '-' + $right.css('width'), 'right'); // Animation
                    setTimeout(function() {
                        rightActive = true;
                        if (typeof callback === 'function') callback(); // Run callback function.
                    }, 400); // Set active variables.
                }
            }
        }

        // Close either Slidebar
        function close(callback) {
            if (leftActive || rightActive) { // If a Slidebar is open.
                if (leftActive) {
                    animate($left, '0px', 'left'); // Animation
                    leftActive = false;
                }
                if (rightActive) {
                    animate($right, '0px', 'right'); // Animation
                    rightActive = false;
                }

                setTimeout(function() { // Wait for closing animation to finish.
                    $('html').removeClass('sb-active sb-active-left sb-active-right'); // Remove active classes.
                    if ($left) $left.removeClass('sb-active');
                    if ($right) $right.removeClass('sb-active');
                    if (typeof callback === 'function') callback(); // Run callback function.
                }, 400);
            }
        }

        // Toggle either Slidebar
        function toggle(side, callback) {
            if (side === 'left' && $left) { // If left Slidebar is called and in use.
                if (!leftActive) {
                    open('left', callback); // Slidebar is closed, open it.
                } else {
                    close(null, callback); // Slidebar is open, close it.
                }
            }
            if (side === 'right' && $right) { // If right Slidebar is called and in use.
                if (!rightActive) {
                    open('right', callback); // Slidebar is closed, open it.
                } else {
                    close(null, callback); // Slidebar is open, close it.
                }
            }
        }

        // ---------
        // 007 - API

        this.slidebars = {
            open: open, // Maps user variable name to the open method.
            close: close, // Maps user variable name to the close method.
            toggle: toggle, // Maps user variable name to the toggle method.
            init: function() { // Returns true or false whether Slidebars are running or not.
                return init; // Returns true or false whether Slidebars are running.
            },
            reInit: initialise, // Run the init method to check if the plugin should still be running.
            resetCSS: css, // Reset inline
            active: function(side) { // Returns true or false whether Slidebar is open or closed.
                if (side === 'left' && $left) return leftActive;
                if (side === 'right' && $right) return rightActive;
            },
            destroy: function(side) { // Removes the Slidebar from the DOM.
                if (side === 'left' && $left) {
                    if (leftActive) close(); // Close if its open.
                    setTimeout(function() {
                        $left.remove(); // Remove it.
                        $left = false; // Set variable to false so it cannot be opened again.
                    }, 400);
                }
                if (side === 'right' && $right) {
                    if (rightActive) close(); // Close if its open.
                    setTimeout(function() {
                        $right.remove(); // Remove it.
                        $right = false; // Set variable to false so it cannot be opened again.
                    }, 400);
                }
            }
        };

        // ----------------
        // 008 - User Input

        function eventHandler(event, selector) {
            event.stopPropagation(); // Stop event bubbling.
            event.preventDefault(); // Prevent default behaviour.
            if (event.type === 'touchend') selector.off('click'); // If event type was touch, turn off clicks to prevent phantom clicks.
        }

        // Toggle left Slidebar
        $('.sb-toggle-left').on('touchend click', function(event) {
            eventHandler(event, $(this)); // Handle the event.
            toggle('left'); // Toggle the left Slidbar.
        });

        // Toggle right Slidebar
        $('.sb-toggle-right').on('touchend click', function(event) {
            eventHandler(event, $(this)); // Handle the event.
            toggle('right'); // Toggle the right Slidbar.
        });

        // Open left Slidebar
        $('.sb-open-left').on('touchend click', function(event) {
            eventHandler(event, $(this)); // Handle the event.
            open('left'); // Open the left Slidebar.
        });

        // Open right Slidebar
        $('.sb-open-right').on('touchend click', function(event) {
            eventHandler(event, $(this)); // Handle the event.
            open('right'); // Open the right Slidebar.
        });

        // Close Slidebar
        $('.sb-close').on('touchend click', function(event) {
            if ( $(this).is('a') || $(this).children().is('a') ) { // Is a link or contains a link.
                if ( event.type === 'click' ) { // Make sure the user wanted to follow the link.
                    event.preventDefault(); // Stop default behaviour.
                    var href = ( $(this).is('a') ? $(this).attr('href') : $(this).find('a').attr('href') ); // Get the href.
                    close(function() { // Close Slidebar and pass callback to redirect.
                        window.location = href;
                    });
                }
            } else { // Just a normal control class.
                eventHandler(event, $(this)); // Handle the event.
                close(); // Close Slidebar.
            }
        });

        // Close Slidebar via site
        $site.on('touchend click', function(event) {
            if (settings.siteClose && (leftActive || rightActive)) { // If settings permit closing by site and left or right Slidebar is open.
                eventHandler(event, $(this)); // Handle the event.
                close(); // Close it.
            }
        });

    }; // End Slidebars function.

}) (jQuery);

/* Slidebars */

(function($) {
    $(document).ready(function() {
        $.slidebars();
    });
})(jQuery);

(function () {
	'use strict';

	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;
		var valLength;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0, valLength = val.length; i < valLength; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();

$(document).ready(function(){

    /* Box switch toggle */

  $('.switch-button').click(function(ev){

    ev.preventDefault();

    var switchParent = $(this).attr('switch-parent');
    var switchTarget = $(this).attr('switch-target');

    $(switchParent).slideToggle();
    $(switchTarget).slideToggle();

  });

    /* Content Box Show/Hide Buttons */

  $('.hidden-button').hover(function(){

    $(".btn-hide", this).fadeIn('fast');

  },function(){

    $(".btn-hide", this).fadeOut('normal');

  });


  /* Content Box Toggle */

  $('.toggle-button').click(function(ev) {

    ev.preventDefault();

    $(".glyph-icon", this).toggleClass("icon-rotate-180");

    $(this).parents(".content-box:first").find(".content-box-wrapper").slideToggle();

  });

  /* Content Box Remove */

  $('.remove-button').click(function(ev){

      ev.preventDefault();

      var animationEFFECT = $(this).attr('data-animation');

      var animationTARGET = $(this).parents(".content-box:first");

      $(animationTARGET).addClass('animated');
      $(animationTARGET).addClass(animationEFFECT);

      var wait = window.setTimeout( function(){
        $(animationTARGET).slideUp()},
        500
      );

      /* Demo show removed content box */

      var wait2 = window.setTimeout( function(){
        $(animationTARGET).removeClass(animationEFFECT).fadeIn()},
        2500
      );

  });

  /* Close Info Boxes */

  $(function() { "use strict";

    $(".infobox-close").click(function(ev){

      ev.preventDefault();

      $(this).parent().fadeOut();

    });


  });

});
$(document).ready(function(){

  /* Loader Show */

  $('.overlay-button').click(function(){

	var loadertheme = $(this).attr('data-theme');
	var loaderopacity = $(this).attr('data-opacity');
	var loaderstyle = $(this).attr('data-style');


	var loader = '<div id="loader-overlay" class="ui-front loader ui-widget-overlay ' + loadertheme + ' opacity-' + loaderopacity + '"><img src="../../assets/images/spinner/loader-' + loaderstyle + '.gif" alt="" /></div>';

    if ( $('#loader-overlay').length ) {
	    $('#loader-overlay').remove();
    }
    $('body').append(loader);
    $('#loader-overlay').fadeIn('fast');

    //demo

    setTimeout(function() {
      $('#loader-overlay').fadeOut('fast');
    }, 3000);

  });

	/* Refresh Box */

	$('.refresh-button').click(function(ev){

		$('.glyph-icon', this).addClass('icon-spin');

	    ev.preventDefault();

	    var refreshParent = $(this).parents('.content-box');

		var loaderTheme = $(this).attr('data-theme');
		var loaderOpacity = $(this).attr('data-opacity');
		var loaderStyle = $(this).attr('data-style');


		var loader = '<div id="refresh-overlay" class="ui-front loader ui-widget-overlay ' + loaderTheme + ' opacity-' + loaderOpacity + '"><img src="../../assets/images/spinner/loader-' + loaderStyle + '.gif" alt="" /></div>';

        if ( $('#refresh-overlay').length ) {
            $('#refresh-overlay').remove();
        }
	    $(refreshParent).append(loader);
	    $('#refresh-overlay').fadeIn('fast');

		//DEMO

        setTimeout(function() {
            $('#refresh-overlay').fadeOut('fast');
            $('.glyph-icon', this).removeClass('icon-spin');
        }, 1500);

	});

});